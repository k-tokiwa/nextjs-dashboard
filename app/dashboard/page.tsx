import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function Page() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">ダッシュボード</h2>
      
      {/* 統計カードのグリッド */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">総収益</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">¥45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% (先月比)</p>
          </CardContent>
        </Card>
        {/* ここにあと3つカードを並べるイメージ */}
      </div>
    </div>
  )
}