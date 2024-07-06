
// import TableRow from "./TableRow";
import useApi from "../hooks/useApi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
const DepartmentTable = () => {
  const { products } = useApi();
  return (
    <div className="overflow-x-auto">
 
  <Table className="rounded-2xl">
      <TableHeader className="capitalize  bg-blue-100 rounded-t-lg ">
        <TableRow className=" ">
          <TableHead className="flex items-center gap-1">
            <input type="checkbox" className="" /> <>S/N</>
          </TableHead>
          <TableHead className="w-fit">Image</TableHead>
          <TableHead className="w-fit">SKU</TableHead>
          <TableHead className="w-fit">Name</TableHead>
          <TableHead className="w-fit">title</TableHead>
          <TableHead className="w-fit">description</TableHead>
          <TableHead className="w-fit">brand</TableHead>
          <TableHead className="w-[100px]"> cost price</TableHead>
          <TableHead className="w-fit"> quantity</TableHead>
          <TableHead className="w-fit"> size</TableHead>
        </TableRow>
      </TableHeader>
      <br />
      <TableBody className="font-medium bg-white rounded-[2rem] ">
        {products.map((product, i) => {
          console.log(product["Description"], product["Title"]);
          return (
            <TableRow key={product.SKU} className=" items-center ">
              <TableCell className="flex  gap-1">
                <input type="checkbox" className="" /> <>{i + 1}</>
              </TableCell>
              {/* image */}
              <TableCell className="p-0">
                <img
                  src={product["Image_1"]}
                  width={100}
                  height={50}
                  alt={product["Title"]} className="w-20 bg-cover"></img>
              </TableCell>
              {/* sku */}
              <TableCell>{product["SKU"]}</TableCell>
              {/* name */}
              <TableCell>{product["Name"]}</TableCell>
              {/* title */}
              <TableCell className="w-fit line-clamp-2">
                {product["Title"]}
              </TableCell>
              {/* description */}
              <TableCell className="  ">{product["Description"]}</TableCell>
              {/* brand */}
              <TableCell>{product["Brand"]}</TableCell>
              {/* cost price */}
              <TableCell>{product["Cost Price"]}</TableCell>
              {/* quantity */}
              <TableCell>{product["Quantity"]}</TableCell>
              {/* size */}
              <TableCell>{product["size"]}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
    </div>
  );
};

export default DepartmentTable;
