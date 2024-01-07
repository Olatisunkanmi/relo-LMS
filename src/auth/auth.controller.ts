import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserSignUpDto } from './dto/auth.dto'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    async register(@Body() registerRequest:UserSignUpDto ) {
        return this.authService.signUp(registerRequest);
    }
}
