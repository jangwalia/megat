"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type PetData = {
  id: number;
  month: string;
  petType: string;
  count: number;
};

type PetMartProps = {
  data: PetData[];
};

const petColors = {
  dogs: "#8884d8",
  cats: "#82ca9d",
  birds: "#ffc658",
  rabbits: "#ff7300",
  hamsters: "#ff4d4d",
};

export default function PetMartCard({ data }: PetMartProps) {
  // Transform the flat data into grouped data by month
  const transformedData = data.reduce((acc, item) => {
    const monthData = acc.find((d) => d.month === item.month);
    if (monthData) {
      monthData[item.petType] = item.count;
    } else {
      acc.push({
        month: item.month,
        [item.petType]: item.count,
      });
    }
    return acc;
  }, [] as any[]);

  const getTotalCount = () => {
    return data.reduce((total, item) => total + item.count, 0);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>PetMart Sales</CardTitle>
        <p className="text-sm text-muted-foreground">
          Total sales: {getTotalCount()}
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={transformedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            {Object.entries(petColors).map(([pet, color]) => (
              <Line
                key={pet}
                type="monotone"
                dataKey={pet}
                stroke={color}
                name={pet.charAt(0).toUpperCase() + pet.slice(1)}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
