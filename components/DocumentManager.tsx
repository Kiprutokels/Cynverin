"use client";

import { useState } from "react";
import { dummyData } from "@/lib/dummy-data";
import { 
  FileText, 
  Image, 
  File, 
  Archive, 
  Download, 
  Share2, 
  Trash2, 
  Plus,
  Search,
  Folder,
  Grid,
  List
} from "lucide-react";

const DocumentManager = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedFolder, setSelectedFolder] = useState<"all" | "work" | "personal" | "financial">("all");

  const { documents } = dummyData;

  const folders = [
    { id: "all", name: "All Documents", count: documents.length },
    { id: "work", name: "Work", count: documents.filter((d) => d.folder === "Work").length },
    { id: "personal", name: "Personal", count: documents.filter((d) => d.folder === "Personal").length },
    { id: "financial", name: "Financial", count: documents.filter((d) => d.folder === "Financial").length },
  ];

  const filteredDocuments =
    selectedFolder === "all"
      ? documents
      : documents.filter((d) => d.folder.toLowerCase() === selectedFolder);

  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
      case "document":
        return FileText;
      case "image":
        return Image;
      case "archive":
        return Archive;
      case "spreadsheet":
      case "text":
      default:
        return File;
    }
  };

  const getFileColor = (type: string) => {
    switch (type) {
      case "pdf":
        return "text-red-500 bg-red-100 dark:bg-red-900/30";
      case "document":
        return "text-blue-500 bg-blue-100 dark:bg-blue-900/30";
      case "image":
        return "text-purple-500 bg-purple-100 dark:bg-purple-900/30";
      case "spreadsheet":
        return "text-green-500 bg-green-100 dark:bg-green-900/30";
      case "archive":
        return "text-orange-500 bg-orange-100 dark:bg-orange-900/30";
      default:
        return "text-gray-500 bg-gray-100 dark:bg-gray-900/30";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Documents</h1>
          <p className="text-muted-foreground">Manage and organize your files</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors">
            <Search className="w-4 h-4" />
            <span className="hidden md:inline">Search</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4" />
            Upload
          </button>
        </div>
      </div>

      {/* Storage Stats */}
      <div className="bg-gradient-hero rounded-2xl p-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <p className="text-white/80 text-sm mb-1">Total Storage</p>
            <p className="text-3xl font-bold">15 GB</p>
            <p className="text-sm text-white/80">of 100 GB used</p>
          </div>
          <div>
            <p className="text-white/80 text-sm mb-1">Total Files</p>
            <p className="text-3xl font-bold">{documents.length}</p>
            <p className="text-sm text-white/80">across all folders</p>
          </div>
          <div>
            <p className="text-white/80 text-sm mb-1">Shared</p>
            <p className="text-3xl font-bold">12</p>
            <p className="text-sm text-white/80">files shared</p>
          </div>
          <div>
            <p className="text-white/80 text-sm mb-1">Recent</p>
            <p className="text-3xl font-bold">8</p>
            <p className="text-sm text-white/80">added this week</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full bg-white/20 rounded-full h-2">
            <div className="bg-white h-2 rounded-full transition-all" style={{ width: "15%" }}></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Folders Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-2xl p-4 border border-border">
            <h2 className="text-sm font-semibold mb-3 text-muted-foreground uppercase">Folders</h2>
            <div className="space-y-1">
              {folders.map((folder) => (
                <button
                  key={folder.id}
                  onClick={() => setSelectedFolder(folder.id as any)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                    selectedFolder === folder.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Folder className="w-4 h-4" />
                    <span className="text-sm font-medium">{folder.name}</span>
                  </div>
                  <span className="text-xs">{folder.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Documents Area */}
        <div className="lg:col-span-3 space-y-4">
          {/* View Controls */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              {folders.find((f) => f.id === selectedFolder)?.name}
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Documents Grid/List */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredDocuments.map((doc) => {
                const Icon = getFileIcon(doc.type);
                const colorClass = getFileColor(doc.type);

                return (
                  <div
                    key={doc.id}
                    className="bg-card rounded-xl p-4 border border-border hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClass}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 hover:bg-muted rounded-lg">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 hover:bg-muted rounded-lg">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 hover:bg-destructive/10 text-destructive rounded-lg">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <h3 className="font-medium text-sm mb-1 truncate">{doc.name}</h3>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{doc.size}</span>
                      <span>{doc.date}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              {filteredDocuments.map((doc) => {
                const Icon = getFileIcon(doc.type);
                const colorClass = getFileColor(doc.type);

                return (
                  <div
                    key={doc.id}
                    className="flex items-center gap-4 p-4 hover:bg-muted transition-colors border-b border-border last:border-b-0"
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm truncate">{doc.name}</h3>
                      <p className="text-xs text-muted-foreground">{doc.folder}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">{doc.size}</div>
                    <div className="text-sm text-muted-foreground">{doc.date}</div>
                    <div className="flex gap-1">
                      <button className="p-2 hover:bg-muted rounded-lg">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-muted rounded-lg">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-destructive/10 text-destructive rounded-lg">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentManager;