import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, Min, MinLength } from "class-validator";

export class RequestData {
    @IsString()
    @MinLength(3)
    answer: string;
    @IsNumber()
    @Min(0)
    @Transform((param)=> parseInt(param.value))
    wait: number;
}