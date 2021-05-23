// import { NextFunction } from "express";
// import { createReceipt } from "../api/task/v1/controller";
// import { createTaskRecipt } from "../db/dal/task";
// import _ from "lodash";

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
//         const opendAtDate = new Date();

//         // @ts-ignore
//         global.Date = jest.fn().mockImplementationOnce(() => opendAtDate);

//         // @ts-ignore
//         createTaskRecipt = jest.fn().mockImplementation(() => {
//             return {
//                 data: {
//                     _writeTime: true,
//                 },
//             };
//         });

//         const req = {
//             body: mockedTaskPayload,
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
//         await createReceipt(req, res, next);

//         expect(res.status().json).toHaveBeenCalledTimes(1);
//         expect(res.status).toHaveBeenCalledTimes(1);
//         expect(res.status().json).toHaveBeenCalledWith({
//             "Booth - Operator Number": "H4",
//             "Date of Entry": opendAtDate.toJSON(),
//             Fee: 900,
//             "Payment Mode": "Cash",
//             "Ticket Number": undefined,
//             "Task Plaza Name": "XE",
//             "Type of Journey": "Round trip",
//             "Type of Vehicle": "Car",
//             "Vehicle No": "AA11BB2222",
//         });
//     });

//     test("Should send error if body is missing", async () => {
//         const req = {
//             body: null,
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
//         await createReceipt(req, res, next);

//         expect(res.status).toHaveBeenCalledTimes(1);
//         expect(res.status).toHaveBeenCalledWith(400);
//         expect(res.status().json).toHaveBeenCalledTimes(1);
//         expect(res.status().json).toHaveBeenCalledWith({
//             error: true,
//             message: "Bad Request: Parameters missing / invalid",
//             description: "Request body is empty",
//         });
//     });

//     test("Should send error if rcNumber is missing", async () => {
//         const req = {
//             body: _.omit(mockedTaskPayload, ["rcNumber"]),
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
//         await createReceipt(req, res, next);

//         expect(res.status).toHaveBeenCalledTimes(1);
//         expect(res.status).toHaveBeenCalledWith(400);
//         expect(res.status().json).toHaveBeenCalledTimes(1);
//         expect(res.status().json).toHaveBeenCalledWith({
//             error: true,
//             message: "Bad Request: Parameters missing / invalid",
//             description: "RC number is required",
//         });
//     });

//     test("Should send error if taskFee is missing", async () => {
//         const req = {
//             body: _.omit(mockedTaskPayload, ["taskFee"]),
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
//         await createReceipt(req, res, next);

//         expect(res.status).toHaveBeenCalledTimes(1);
//         expect(res.status).toHaveBeenCalledWith(400);
//         expect(res.status().json).toHaveBeenCalledTimes(1);
//         expect(res.status().json).toHaveBeenCalledWith({
//             error: true,
//             message: "Bad Request: Parameters missing / invalid",
//             description: "Price is required",
//         });
//     });

//     test("Should send error if laneClass is missing", async () => {
//         const req = {
//             body: _.omit(mockedTaskPayload, ["laneClass"]),
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
//         await createReceipt(req, res, next);

//         expect(res.status).toHaveBeenCalledTimes(1);
//         expect(res.status).toHaveBeenCalledWith(400);
//         expect(res.status().json).toHaveBeenCalledTimes(1);
//         expect(res.status().json).toHaveBeenCalledWith({
//             error: true,
//             message: "Bad Request: Parameters missing / invalid",
//             description: "Lane class is required",
//         });
//     });

//     test("Should send error if plazaName is missing", async () => {
//         const req = {
//             body: _.omit(mockedTaskPayload, ["plazaName"]),
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
//         await createReceipt(req, res, next);

//         expect(res.status).toHaveBeenCalledTimes(1);
//         expect(res.status).toHaveBeenCalledWith(400);
//         expect(res.status().json).toHaveBeenCalledTimes(1);
//         expect(res.status().json).toHaveBeenCalledWith({
//             error: true,
//             message: "Bad Request: Parameters missing / invalid",
//             description: "Plaza Name is required",
//         });
//     });

//     test("Should send error if paymentMode is missing", async () => {
//         const req = {
//             body: _.omit(mockedTaskPayload, ["paymentMode"]),
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
//         await createReceipt(req, res, next);

//         expect(res.status).toHaveBeenCalledTimes(1);
//         expect(res.status).toHaveBeenCalledWith(400);
//         expect(res.status().json).toHaveBeenCalledTimes(1);
//         expect(res.status().json).toHaveBeenCalledWith({
//             error: true,
//             message: "Bad Request: Parameters missing / invalid",
//             description: "Payment mode is required",
//         });
//     });

//     test("Should send error if vhClass is missing", async () => {
//         const req = {
//             body: _.omit(mockedTaskPayload, ["vhClass"]),
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
//         await createReceipt(req, res, next);

//         expect(res.status).toHaveBeenCalledTimes(1);
//         expect(res.status).toHaveBeenCalledWith(400);
//         expect(res.status().json).toHaveBeenCalledTimes(1);
//         expect(res.status().json).toHaveBeenCalledWith({
//             error: true,
//             message: "Bad Request: Parameters missing / invalid",
//             description: "Vehicle class is required",
//         });
//     });
// });
