"use client";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-10 max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Cài đặt hệ thống
      </h1>

      <div className="rounded-2xl border bg-white dark:bg-gray-900 dark:border-gray-800 p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Hoa hồng mặc định (%)
          </label>
          <input
            type="number"
            defaultValue={15}
            className="w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-900 dark:border-gray-700"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Giảm cho seller VIP (%)
          </label>
          <input
            type="number"
            defaultValue={5}
            className="w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-900 dark:border-gray-700"
          />
        </div>
      </div>

      <button className="w-full py-3 rounded-xl bg-indigo-600 text-white font-medium">
        Lưu cài đặt
      </button>
    </div>
  );
}
