// import { NextFunction } from "express";
// import { fetchReceipt } from "../api/task/v1/controller";
// import { fetchTaskRecipt } from "../db/dal/task";
// import _ from "lodash";

// // @ts-ignore
// global.console = {
//     error: jest.fn(),
//     log: jest.fn(),
// };

// const mockedRcNumber = "AA11BB2222";
// const mockedTaskResponse = {
//     "Vehicle No": "AA11BB2222",
//     "Type of Journey": "Round trip",
//     "Date of Entry": "2021-05-11T14:41:19.683Z",
//     Fee: "900",
//     "Booth - Operator Number": "H4",
//     "Task Plaza Name": "XE",
//     "Payment Mode": "Cash",
//     "Type of Vehicle": "truck",
// };

// describe("fetchTaskReceipt", () => {
//     test("Should get success if everything is OK", async () => {
//         // @ts-ignore
//         fetchTaskRecipt = jest.fn().mockImplementation(() => {
//             return [
//                 {
//                     rcNumber: "AA11BB2222",
//                     isRoundTrip: true,
//                     startDate: "2021-05-11T14:41:19.683Z",
//                     taskFee: "900",
//                     laneClass: "H4",
//                     plazaName: "XE",
//                     paymentMode: "Cash",
//                     vhClass: "truck",
//                 },
//             ];
//         });

//         const req = {
//             params: {
//                 id: mockedRcNumber,
//             },
//             headers: {
//                 "content-type": "application/json",
//             },
//         };

//         const res = {
//             json: jest.fn(),
//             status: jest.fn(() => res),
//         };

//         const next = jest.fn<NextFunction, []>();

//         // @ts-ignore
//         await fetchReceipt(req, res, next);

//         expect(res.status().json).toHaveBeenCalledTimes(1);
//         expect(res.status).toHaveBeenCalledTimes(1);
//         expect(res.status().json).toHaveBeenCalledWith([mockedTaskResponse]);
//     });
// });
