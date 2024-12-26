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

type BlogCardsProps = {
  blogs: any;
};

export default function BlogsCard({ blogs }: BlogCardsProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Blog Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={blogs}>
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
