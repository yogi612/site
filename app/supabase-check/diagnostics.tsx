"use client"

import { useState, useEffect } from "react"
import { LoadingSpinner } from "@/components/LoadingSpinner"
import { Button } from "@/components/ui/button"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, XCircle, AlertTriangle, RefreshCw } from "lucide-react"

export default function SupabaseDiagnostics() {
  const [diagnostics, setDiagnostics] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchDiagnostics = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/supabase-diagnostics")

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.json()
      setDiagnostics(data)
    } catch (err: any) {
      setError(err.message || "Failed to fetch diagnostics")
      console.error("Error fetching diagnostics:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDiagnostics()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner size="lg" />
        <span className="ml-3">Loading diagnostics...</span>
      </div>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive" className="mb-6">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Failed to load diagnostics: {error}
          <div className="mt-4">
            <Button onClick={fetchDiagnostics} variant="outline" size="sm">
              <RefreshCw className="mr-2 h-4 w-4" />
              Retry
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Diagnostics Results</h2>
        <Button onClick={fetchDiagnostics} variant="outline" size="sm">
          <RefreshCw className="mr-2 h-4 w-4" />
          Refresh
        </Button>
      </div>

      <div className="space-y-4">
        {/* Connection Status */}
        <div className="border rounded-lg p-4">
          <div className="flex items-center mb-2">
            {diagnostics.connection.success ? (
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            ) : (
              <XCircle className="h-5 w-5 text-red-500 mr-2" />
            )}
            <h3 className="text-lg font-medium">Connection Status</h3>
          </div>
          <p className={diagnostics.connection.success ? "text-green-600" : "text-red-600"}>
            {diagnostics.connection.message}
          </p>
          {!diagnostics.connection.success && diagnostics.connection.code && (
            <p className="text-sm text-gray-500 mt-1">Error code: {diagnostics.connection.code}</p>
          )}
        </div>

        {/* Environment Variables */}
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-medium mb-2">Environment Variables</h3>
          <ul className="space-y-2">
            {Object.entries(diagnostics.environment).map(([key, value]: [string, any]) => (
              <li key={key} className="flex items-center">
                {value ? (
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-500 mr-2" />
                )}
                <span className="font-mono text-sm">{key}</span>
                <span className="ml-2 text-sm">{value ? "Available" : "Missing"}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Auth Configuration */}
        <div className="border rounded-lg p-4">
          <div className="flex items-center mb-2">
            {diagnostics.auth.status === "configured" ? (
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            ) : diagnostics.auth.status === "error" ? (
              <XCircle className="h-5 w-5 text-red-500 mr-2" />
            ) : (
              <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
            )}
            <h3 className="text-lg font-medium">Auth Configuration</h3>
          </div>
          <p
            className={
              diagnostics.auth.status === "configured"
                ? "text-green-600"
                : diagnostics.auth.status === "error"
                  ? "text-red-600"
                  : "text-yellow-600"
            }
          >
            {diagnostics.auth.message}
          </p>
        </div>

        {/* Database Tables */}
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-medium mb-4">Database Tables</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Table Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Records
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Object.entries(diagnostics.tables).map(([tableName, tableInfo]: [string, any]) => (
                  <tr key={tableName}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tableName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          tableInfo.exists ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {tableInfo.exists ? "Exists" : "Missing"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {tableInfo.exists ? tableInfo.count : "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {tableInfo.exists ? (
                        tableInfo.columns ? (
                          <details className="cursor-pointer">
                            <summary>Show columns</summary>
                            <div className="mt-2 text-xs font-mono bg-gray-50 p-2 rounded">
                              {tableInfo.columns.map((col: any, idx: number) => (
                                <div key={idx}>
                                  {col.column_name}: {col.data_type}
                                </div>
                              ))}
                            </div>
                          </details>
                        ) : (
                          "No column info available"
                        )
                      ) : (
                        <span className="text-red-500">{tableInfo.error}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SQL to create missing tables */}
      {Object.values(diagnostics.tables).some((table: any) => !table.exists) && (
        <div className="border rounded-lg p-4 mt-6">
          <h3 className="text-lg font-medium mb-2">SQL to Create Missing Tables</h3>
          <div className="bg-gray-50 p-4 rounded-md">
            <pre className="text-sm overflow-x-auto">
              {`-- Run this SQL in your Supabase SQL Editor to create missing tables

-- Profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  phone TEXT,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Loan applications table
CREATE TABLE IF NOT EXISTS loan_applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  loanType TEXT NOT NULL,
  amount NUMERIC NOT NULL,
  purpose TEXT,
  employmentType TEXT,
  monthlyIncome NUMERIC,
  status TEXT DEFAULT 'pending',
  user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Partner applications table
CREATE TABLE IF NOT EXISTS partner_applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT NOT NULL,
  experience INTEGER,
  location TEXT,
  businessType TEXT,
  expectedBusiness NUMERIC,
  status TEXT DEFAULT 'pending',
  user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Job applications table
CREATE TABLE IF NOT EXISTS job_applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  position TEXT NOT NULL,
  experience INTEGER,
  currentCompany TEXT,
  expectedSalary NUMERIC,
  resume TEXT,
  status TEXT DEFAULT 'pending',
  user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  features JSONB,
  category TEXT,
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- News table
CREATE TABLE IF NOT EXISTS news (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  summary TEXT,
  image_url TEXT,
  author TEXT,
  is_published BOOLEAN DEFAULT true,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  rating INTEGER NOT NULL,
  comment TEXT NOT NULL,
  is_approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create RPC function to get table columns if it doesn't exist
CREATE OR REPLACE FUNCTION get_table_columns(table_name text)
RETURNS TABLE (
  column_name text,
  data_type text,
  is_nullable boolean
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    c.column_name::text,
    c.data_type::text,
    c.is_nullable::boolean
  FROM 
    information_schema.columns c
  WHERE 
    c.table_schema = 'public' AND
    c.table_name = table_name
  ORDER BY 
    c.ordinal_position;
END;
$$ LANGUAGE plpgsql;`}
            </pre>
          </div>
        </div>
      )}

      {/* Raw JSON output */}
      <details className="mt-6">
        <summary className="cursor-pointer text-sm text-gray-500">Show raw diagnostics data</summary>
        <div className="mt-2 bg-gray-50 p-4 rounded-md overflow-x-auto">
          <pre className="text-xs">{JSON.stringify(diagnostics, null, 2)}</pre>
        </div>
      </details>
    </div>
  )
}
