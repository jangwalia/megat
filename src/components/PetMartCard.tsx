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

const data = [
  { month: "Jan", dogs: 400, cats: 240, fish: 240 },
  { month: "Feb", dogs: 300, cats: 139, fish: 221 },
  { month: "Mar", dogs: 200, cats: 980, fish: 229 },
  { month: "Apr", dogs: 278, cats: 390, fish: 200 },
  { month: "May", dogs: 189, cats: 480, fish: 218 },
  { month: "Jun", dogs: 239, cats: 380, fish: 250 },
];

export default function PetMartCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>PetMart Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="dogs" stroke="#8884d8" />
            <Line type="monotone" dataKey="cats" stroke="#82ca9d" />
            <Line type="monotone" dataKey="fish" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
