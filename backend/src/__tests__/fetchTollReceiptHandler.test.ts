// import { fetchReceiptHandler } from "../api/task/v1/handler";
// import { fetchTaskRecipt } from "../db/dal/task";

// // @ts-ignore
// global.console = {
//     error: jest.fn(),
//     log: jest.fn(),
// };

// const todayDate = new Date();

// const mockedRcNumber = "AA11BB2222";
// const mockedTaskResponse = {
//     "Vehicle No": "AA11BB2222",
//     "Type of Journey": "Round trip",
//     "Date of Entry": todayDate.toDateString(),
//     Fee: "900",
//     "Booth - Operator Number": "H4",
//     "Task Plaza Name": "XE",
//     "Payment Mode": "Cash",
//     "Type of Vehicle": "truck",
//     "Trip Completed": false,
//     "Ticket Number": "ABCD-1234",
// };

// describe("createTaskReceipt", () => {
//     test("Should get success if everything is OK", async () => {
//         // @ts-ignore
//         fetchTaskRecipt = jest.fn().mockImplementationOnce(() => {
//             return [
//                 {
//                     rcNumber: "AA11BB2222",
//                     isRoundTrip: true,
//                     startDate: todayDate.toDateString(),
//                     taskFee: "900",
//                     laneClass: "H4",
//                     plazaName: "XE",
//                     paymentMode: "Cash",
//                     vhClass: "truck",
//                     tripCompleted: false,
//                     id: "ABCD-1234",
//                 },
//             ];
//         });

//         const createdTaskReceipt = await fetchReceiptHandler(mockedRcNumber);

//         expect(createdTaskReceipt).toMatchInlineSnapshot(
//             mockedTaskResponse,
//             `
//             Object {
//               "Booth - Operator Number": "H4",
//               "Date of Entry": "Tue May 18 2021",
//               "Fee": "900",
//               "Payment Mode": "Cash",
//               "Ticket Number": "ABCD-1234",
//               "Task Plaza Name": "XE",
//               "Trip Completed": false,
//               "Type of Journey": "Round trip",
//               "Type of Vehicle": "truck",
//               "Vehicle No": "AA11BB2222",
//             }
//         `
//         );
//     });

//     test("Should get success if fetchTaskRecipt returns {}", async () => {
//         // @ts-ignore
//         fetchTaskRecipt = jest.fn().mockImplementation(() => {
//             return [];
//         });

//         const createdTaskReceipt = await fetchReceiptHandler(mockedRcNumber);

//         expect(createdTaskReceipt).toMatchInlineSnapshot(
//             {
//                 message: "No receipt found for given rc number",
//             },
//             `
//                   Object {
//                     "message": "No receipt found for given rc number",
//                   }
//             `
//         );
//     });

//     test("Should get success if fetchTaskRecipt fails", async () => {
//         // @ts-ignore
//         fetchTaskRecipt = jest.fn().mockRejectedValueOnce({
//             message: "fetchTaskRecipt failed in DAL",
//         });

//         const createdTaskReceipt = await fetchReceiptHandler(mockedRcNumber);

//         expect(createdTaskReceipt).toMatchInlineSnapshot(
//             {
//                 message: "fetchTaskRecipt failed in DAL",
//             },
//             `
//                   Object {
//                     "message": "fetchTaskRecipt failed in DAL",
//                   }
//             `
//         );
//     });

//     test("Should not fetch the receipt if it is older than a day", async () => {
//         // @ts-ignore
//         fetchTaskRecipt = jest.fn().mockImplementation(() => {
//             return [
//                 {
//                     "Vehicle No": "AA11BB2222",
//                     "Type of Journey": "Round trip",
//                     "Date of Entry": "2021-05-11T14:41:19.683Z",
//                     Fee: "200",
//                     "Booth - Operator Number": "H4",
//                     "Task Plaza Name": "XE",
//                     "Payment Mode": "Cash",
//                     "Type of Vehicle": "truck",
//                 },
//             ];
//         });

//         const createdTaskReceipt = await fetchReceiptHandler(mockedRcNumber);

//         expect(createdTaskReceipt).toMatchInlineSnapshot(
//             {
//                 message: "Task receipt not found",
//             },
//             `
//             Object {
//               "message": "Task receipt not found",
//             }
//         `
//         );
//     });
// });
