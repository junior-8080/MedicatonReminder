import { Table, ConfigProvider } from "antd";
import type { TableProps } from "antd";
import { PaginationNextIcon, PaginationPrevIcon } from "../core/Icons";

export type AppTableProps<T> = TableProps<T>;

function AppTable<T extends object>(props: AppTableProps<T>) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerColor: "#5E718D",
            fontSize: 14,
            fontWeightStrong: 400,
            colorText: "#8897AE",
          },
          Pagination: {
            itemActiveBg: "#004056",
            colorBgTextActive: "#fff",
            colorBorder: "#DCDEE3",
            colorText: "#004056",
            colorPrimary: "#fff",
          },
        },
      }}
    >
      <Table<T>
        {...props}
        className={`app-table  ${props.className || ""}`}
        rowClassName={(_, index) => (index % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white")}
        size="middle"
        pagination={props.pagination
          // position: ["bottomRight"],
          // className: "custom-pagination",
          // prevIcon: <PaginationPrevIcon />,
          // nextIcon: <PaginationNextIcon />,

        }
      />
    </ConfigProvider>
  );
}

export default AppTable;
