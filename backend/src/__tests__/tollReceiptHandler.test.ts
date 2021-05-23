// import { createReceiptHandler } from "../api/task/v1/handler";
// import { createTaskRecipt } from "../db/dal/task";

// // @ts-ignore
// global.console = {
//     error: jest.fn(),
//     log: jest.fn(),
// };

// const mockedTaskPayload = {
//     rcNumber: "AA11BB2222",
//     taskFee: 900,
//     laneClass: "H4",
//     plazaName: "XE",
//     paymentMode: "Cash",
//     vhClass: "Car",
//     isRoundTrip: true,
// };

// describe("createTaskReceipt", () => {
//     test("Should get success if everything is OK", async () => {
//         // @ts-ignore
//         createTaskRecipt = jest.fn().mockImplementation(() => {
//             return {
//                 data: {
//                     _writeTime: true,
//                 },
//             };
//         });

//         const createdTaskReceipt = await createReceiptHandler(
//             mockedTaskPayload
//         );

//         expect(createdTaskReceipt).toHaveProperty("Vehicle No", "AA11BB2222");
//         expect(createdTaskReceipt).toHaveProperty(
//             "Type of Journey",
//             "Round trip"
//         );
//         expect(createdTaskReceipt).toHaveProperty("Fee", 900);
//         expect(createdTaskReceipt).toHaveProperty(
//             "Booth - Operator Number",
//             "H4"
//         );
//         expect(createdTaskReceipt).toHaveProperty("Task Plaza Name", "XE");
//         expect(createdTaskReceipt).toHaveProperty("Payment Mode", "Cash");
//         expect(createdTaskReceipt).toHaveProperty("Type of Vehicle", "Car");
//     });

//     test("Should get success if createTaskRecipt returns {}", async () => {
//         // @ts-ignore
//         createTaskRecipt = jest.fn().mockImplementation(() => {
//             return {
//                 data: {
//                     _writeTime: null,
//                 },
//             };
//         });

//         const createdTaskReceipt = await createReceiptHandler(
//             mockedTaskPayload
//         );

//         expect(createdTaskReceipt).toMatchInlineSnapshot(
//             {
//                 message: "Failed to create task receipt",
//             },
//             `
//       Object {
//         "message": "Failed to create task receipt",
//       }
//     `
//         );
//     });

//     test("Should get success if createTaskRecipt fails", async () => {
//         // @ts-ignore
//         createTaskRecipt = jest.fn().mockRejectedValueOnce({
//             message: "createTaskRecipt failed in DAL",
//         });

//         const createdTaskReceipt = await createReceiptHandler(
//             mockedTaskPayload
//         );

//         expect(createdTaskReceipt).toMatchInlineSnapshot(
//             {
//                 message: "createTaskRecipt failed in DAL",
//             },
//             `
//       Object {
//         "message": "createTaskRecipt failed in DAL",
//       }
//     `
//         );
//     });
// });
