"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { category: "Technology", month: "Jan", active: 20, scheduled: 10 },
  { category: "Technology", month: "Feb", active: 25, scheduled: 15 },
  { category: "Travel", month: "Jan", active: 15, scheduled: 5 },
  { category: "Travel", month: "Feb", active: 18, scheduled: 8 },
  { category: "Food", month: "Jan", active: 30, scheduled: 12 },
  { category: "Food", month: "Feb", active: 35, scheduled: 15 },
];

export default function BlogsCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Blog Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="active"
              stackId="status"
              fill="#8884d8"
              name="Active Posts"
            />
            <Bar
              dataKey="scheduled"
              stackId="status"
              fill="#82ca9d"
              name="Scheduled Posts"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
