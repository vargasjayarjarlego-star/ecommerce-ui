import { Clock, CheckCircle, Truck, Package } from 'lucide-react'

export default function OrderHistoryPage() {
  const orders = [
    {
      id: '12345',
      date: '2026-03-20',
      total: 299.97,
      status: 'Delivered',
      items: 3,
      icon: CheckCircle
    },
    {
      id: '12344',
      date: '2026-03-15',
      total: 149.98,
      status: 'In Transit',
      items: 2,
      icon: Truck
    },
    {
      id: '12343',
      date: '2026-03-10',
      total: 79.99,
      status: 'Processing',
      items: 1,
      icon: Package
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Order History</h1>

      {orders.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No orders yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order) => {
            const IconComponent = order.icon
            return (
              <div key={order.id} className="card">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg">Order #{order.id}</h3>
                    <p className="text-sm text-gray-600">{order.date}</p>
                  </div>
                  <IconComponent className={`w-6 h-6 ${
                    order.status === 'Delivered' ? 'text-green-600' :
                    order.status === 'In Transit' ? 'text-blue-600' :
                    'text-yellow-600'
                  }`} />
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">{order.items} items</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        order.status === 'Delivered' ? 'bg-green-600 w-full' :
                        order.status === 'In Transit' ? 'bg-blue-600 w-2/3' :
                        'bg-yellow-600 w-1/3'
                      }`}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">{order.status}</p>
                </div>

                <div className="border-t pt-4">
                  <p className="text-2xl font-bold text-blue-600">${order.total}</p>
                  <button className="btn-secondary w-full mt-4">View Details</button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}