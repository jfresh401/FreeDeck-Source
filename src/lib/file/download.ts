import { writeBinaryFile } from "@tauri-apps/api/fs";

export const download = async (data: Buffer) => {
  if ("__TAURI_IPC__" in window) {
    // todo: fix this not downloading
    const { save } = await import("@tauri-apps/api/dialog");
    const path = await save({
      defaultPath: "config.bin",
    });
    if (!path) return;
    await writeBinaryFile(path, data);
  } else {
    var a = document.createElement("a");
    document.body.appendChild(a);
    const blob = new Blob([data], { type: "octet/stream" });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = "config.bin";
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }
};
