"use client";

import { dummyData } from "@/lib/dummy-data";
import { DollarSign, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, Plus } from "lucide-react";

const FinancialTracker = () => {
  const { finances } = dummyData;
  const remaining = finances.monthlyBudget - finances.spent;
  const percentUsed = Math.round((finances.spent / finances.monthlyBudget) * 100);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Financial Tracker</h1>
          <p className="text-muted-foreground">Monitor your spending and manage your budget</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4" />
          Add Transaction
        </button>
      </div>

      {/* Budget Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-hero rounded-2xl p-6 text-white">
          <div className="flex items-center gap-2 mb-3">
            <DollarSign className="w-5 h-5" />
            <p className="text-white/80 text-sm">Monthly Budget</p>
          </div>
          <p className="text-4xl font-bold mb-2">${finances.monthlyBudget}</p>
          <p className="text-sm text-white/80">Total allocated for this month</p>
        </div>

        <div className="bg-card rounded-2xl p-6 border border-border">
          <div className="flex items-center gap-2 mb-3">
            <ArrowDownRight className="w-5 h-5 text-destructive" />
            <p className="text-muted-foreground text-sm">Total Spent</p>
          </div>
          <p className="text-4xl font-bold mb-2">${finances.spent}</p>
          <div className="flex items-center gap-1 text-sm">
            <span className={percentUsed > 80 ? "text-destructive" : "text-success"}>
              {percentUsed}% of budget
            </span>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-6 border border-border">
          <div className="flex items-center gap-2 mb-3">
            <ArrowUpRight className="w-5 h-5 text-success" />
            <p className="text-muted-foreground text-sm">Remaining</p>
          </div>
          <p className="text-4xl font-bold mb-2">${remaining}</p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Available to spend
          </div>
        </div>
      </div>

      {/* Budget Progress */}
      <div className="bg-card rounded-2xl p-6 border border-border">
        <h2 className="text-lg font-semibold mb-4">Budget Progress</h2>
        <div className="space-y-1 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Overall spending</span>
            <span className="font-semibold">{percentUsed}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-3">
            <div
              className={`h-3 rounded-full transition-all ${
                percentUsed > 90
                  ? "bg-destructive"
                  : percentUsed > 75
                  ? "bg-warning"
                  : "bg-success"
              }`}
              style={{ width: `${percentUsed}%` }}
            ></div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          You've spent ${finances.spent} out of ${finances.monthlyBudget} this month
        </p>
      </div>

      {/* Category Breakdown */}
      <div className="bg-card rounded-2xl p-6 border border-border">
        <h2 className="text-lg font-semibold mb-4">Spending by Category</h2>
        <div className="space-y-4">
          {finances.categories.map((category) => {
            const categoryPercent = Math.round((category.spent / category.budget) * 100);
            const isOverBudget = category.spent > category.budget;

            return (
              <div key={category.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full bg-${category.color}-500`}></div>
                    <span className="font-medium">{category.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      ${category.spent} / ${category.budget}
                    </p>
                    <p className={`text-xs ${isOverBudget ? "text-destructive" : "text-muted-foreground"}`}>
                      {categoryPercent}%
                    </p>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className={`bg-${category.color}-500 h-2 rounded-full transition-all ${
                      isOverBudget ? "opacity-100" : ""
                    }`}
                    style={{ width: `${Math.min(categoryPercent, 100)}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-card rounded-2xl p-6 border border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <button className="text-sm text-primary hover:underline">View All</button>
        </div>
        <div className="space-y-3">
          {finances.recentTransactions.map((transaction) => {
            const isIncome = transaction.amount > 0;

            return (
              <div
                key={transaction.id}
                className="flex items-center gap-4 p-4 hover:bg-muted rounded-lg transition-colors"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isIncome ? "bg-success/10" : "bg-destructive/10"
                  }`}
                >
                  {isIncome ? (
                    <TrendingUp className="w-5 h-5 text-success" />
                  ) : (
                    <TrendingDown className="w-5 h-5 text-destructive" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{transaction.description}</h3>
                  <p className="text-sm text-muted-foreground">
                    {transaction.category} • {transaction.date}
                  </p>
                </div>
                <p
                  className={`text-lg font-bold ${
                    isIncome ? "text-success" : "text-destructive"
                  }`}
                >
                  {isIncome ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Spending Insights */}
      <div className="bg-gradient-accent rounded-2xl p-6 text-white">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5" />
          <h2 className="text-lg font-semibold">Spending Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-white/80 text-sm mb-1">Top Category</p>
            <p className="text-xl font-bold">Rent</p>
            <p className="text-sm text-white/80">$1,500 spent</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-white/80 text-sm mb-1">Average Daily</p>
            <p className="text-xl font-bold">$111.67</p>
            <p className="text-sm text-white/80">Based on this month</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-white/80 text-sm mb-1">Projected End</p>
            <p className="text-xl font-bold">${Math.round(finances.spent + (remaining * 0.3))}</p>
            <p className="text-sm text-white/80">By month end</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialTracker;