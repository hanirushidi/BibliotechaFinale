import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Component(prop: {
  title: string;
  value: string;
  percentage: string;
}) {
  return (
    <Card className="flex flex-col items-start gap-5 py-3 h-fit px-5 w-56">
      <CardHeader className="flex flex-row w-full items-center justify-between">
        <CardTitle className="text-sm font-medium">{prop.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="text-2xl font-bold">{prop.value}</div>
        <p className="text-xs font-bold text-[#00633F]">
          {prop.percentage} from last month
        </p>
      </CardContent>
    </Card>
  );
}
