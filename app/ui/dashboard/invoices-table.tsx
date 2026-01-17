import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import { fetchFilteredInvoices } from '@/app/lib/data';
import { InvoicesTableType } from '@/app/lib/definitions';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {/* Mobile view */}
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p className="text-sm font-medium">{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-600">{invoice.email}</p>
                  </div>
                  <p className="text-sm font-medium">{invoice.amount}</p>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xs">
                      {invoice.date.toLocaleDateString()}
                    </p>
                    <p className="text-xs text-gray-500">
                      {invoice.status}
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="text-left text-sm font-normal text-gray-500">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative px-4 py-5 sm:pr-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              {invoices?.map((invoice) => (
                <tr key={invoice.id} className="group hover:bg-gray-100">
                  <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-hover:bg-gray-50 sm:pl-6">
                    <div className="flex items-center gap-3">
                      <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p className="font-medium">{invoice.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-hover:bg-gray-50">
                    {invoice.email}
                  </td>
                  <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-hover:bg-gray-50">
                    {invoice.amount}
                  </td>
                  <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-hover:bg-gray-50">
                    {invoice.date.toLocaleDateString()}
                  </td>
                  <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-hover:bg-gray-50">
                    {invoice.status}
                  </td>
                  <td className="whitespace-nowrap bg-white py-3 pl-3 pr-4 text-sm group-hover:bg-gray-50 sm:pr-6">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
