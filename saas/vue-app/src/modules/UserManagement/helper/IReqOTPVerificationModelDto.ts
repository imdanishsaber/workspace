export default interface IReqOTPVerificationModelDto {
  email: string;
  newEmail?: string;
  otp: number;
}
