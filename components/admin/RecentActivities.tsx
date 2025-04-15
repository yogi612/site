import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentActivities() {
  const activities = [
    {
      id: 1,
      user: {
        name: "Rahul Sharma",
        email: "rahul@example.com",
        image: "/placeholder.svg?height=32&width=32",
        initials: "RS",
      },
      action: "submitted a loan application",
      timestamp: "2 minutes ago",
    },
    {
      id: 2,
      user: {
        name: "Priya Patel",
        email: "priya@example.com",
        image: "/placeholder.svg?height=32&width=32",
        initials: "PP",
      },
      action: "created a new account",
      timestamp: "10 minutes ago",
    },
    {
      id: 3,
      user: {
        name: "Amit Kumar",
        email: "amit@example.com",
        image: "/placeholder.svg?height=32&width=32",
        initials: "AK",
      },
      action: "updated their profile",
      timestamp: "1 hour ago",
    },
    {
      id: 4,
      user: {
        name: "Neha Gupta",
        email: "neha@example.com",
        image: "/placeholder.svg?height=32&width=32",
        initials: "NG",
      },
      action: "checked their credit score",
      timestamp: "2 hours ago",
    },
    {
      id: 5,
      user: {
        name: "Vijay Singh",
        email: "vijay@example.com",
        image: "/placeholder.svg?height=32&width=32",
        initials: "VS",
      },
      action: "contacted support",
      timestamp: "3 hours ago",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center space-x-4 rounded-md border p-3">
          <Avatar>
            <AvatarImage src={activity.user.image} alt={activity.user.name} />
            <AvatarFallback>{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">
              {activity.user.name} <span className="font-normal">{activity.action}</span>
            </p>
            <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
