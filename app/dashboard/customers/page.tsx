import { Suspense } from 'react'
import CustomersContent from './customers-content'

export default function CustomersPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">顧客管理</h1>
      <Suspense fallback={<div className="text-center py-8">読み込み中...</div>}>
        <CustomersContent />
      </Suspense>
    </div>
  )
}