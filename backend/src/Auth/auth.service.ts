import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}
  async login(dto: AuthDto) {
    // find the user by email
    /*const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) {
      throw new ForbiddenException('Invalid email or password');
    }

    // compare the password
    const isPasswordValid = await argon.verify(user.password, dto.password);

    if (!isPasswordValid) {
      throw new ForbiddenException('Invalid email or password');
    }

    const token = await this.jwt.signAsync(
      { id: user.id, email: user.email },
      { expiresIn: '1d', secret: process.env.JWT_SECRET },
    );

    return {
      success: true,
      message: 'Logged in',
      token,
    };*/
  }

  async signup(dto: AuthDto) {
    /*try {
      // Generate a hash of the password
      const hashedPassword = await argon.hash(dto.password);
      // Save the email and hashed password to the database
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          password: hashedPassword,
        },
      });

      delete user.password;

      return {
        success: true,
        message: 'Signed up',
        user,
      };
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ForbiddenException('Email already exists');
      }
      throw error;
    }*/
  }
}
