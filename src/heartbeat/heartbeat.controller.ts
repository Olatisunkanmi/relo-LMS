import { Get, Controller, Req } from "@nestjs/common";
import { Request } from "express";


@Controller('heartbeat')
export class HeartbeatController {

    @Get('/health')
    async heartbeat(@Req() req: Request) {
        return {
            message: 'Heartbeat',
        };
    }

}