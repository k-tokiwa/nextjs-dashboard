'use client'

import { useQueryState } from 'nuqs'
import { customers } from '@/app/lib/placeholder-data'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CustomersContent() {
  const [selectedId, setSelectedId] = useQueryState('id')
  const selectedCustomer = customers.find(c => c.id === selectedId)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* 左側：リストエリア */}
      <div className="flex flex-col gap-2">
        {customers.map((c) => (
          <Button
            key={c.id}
            variant={selectedId === c.id ? "default" : "outline"}
            className="justify-start"
            onClick={() => setSelectedId(c.id)}
          >
            {c.name}
          </Button>
        ))}
      </div>

      {/* 右側：詳細表示エリア */}
      <div className="md:col-span-2">
        {selectedCustomer ? (
          <Card>
            <CardHeader>
              <CardTitle>{selectedCustomer.name} の詳細</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-2">
                <div>
                  <dt className="text-sm text-muted-foreground">メールアドレス</dt>
                  <dd>{selectedCustomer.email}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">写真</dt>
                  <dd>
                    <img 
                      src={selectedCustomer.image_url} 
                      alt={selectedCustomer.name} 
                      className="h-24 w-24 rounded-md" 
                    />
                  </dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        ) : (
          <div className="h-full flex items-center justify-center border-2 border-dashed rounded-lg p-12 text-muted-foreground">
            顧客を選択してください
          </div>
        )}
      </div>
    </div>
  )
}