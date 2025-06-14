"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const greet_1 = __importDefault(require("./greet/greet"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/greet', greet_1.default);
app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsK0RBQTZDO0FBRTdDLE1BQU0sR0FBRyxHQUFHLElBQUEsaUJBQU8sR0FBRSxDQUFDO0FBQ3RCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGVBQVcsQ0FBQyxDQUFDO0FBRS9CLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7QUFDbkQsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGdyZWV0Um91dGVzIGZyb20gJy4uL3NyYy9ncmVldC9ncmVldCc7XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xyXG5hcHAudXNlKCcvZ3JlZXQnLCBncmVldFJvdXRlcyk7XHJcblxyXG5hcHAubGlzdGVuKDMwMDAsICgpID0+IHtcclxuICBjb25zb2xlLmxvZygnU2Vydmlkb3IgY29ycmllbmRvIGVuIHB1ZXJ0byAzMDAwJyk7XHJcbn0pOyJdfQ==