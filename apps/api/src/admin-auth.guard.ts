import { CanActivate, ExecutionContext, Injectable, UnauthorizedException, HttpException } from '@nestjs/common';
import { timingSafeEqual } from 'node:crypto';
import type { Request } from 'express';

// Local-only, process-wide window; no proxy/IP trust, no persistence across restarts.
@Injectable()
export class AdminAuthGuard implements CanActivate {
 private start = Date.now(); private count = 0;
 canActivate(context: ExecutionContext): boolean {
  const now = Date.now(); if (now - this.start >= 60_000) { this.start = now; this.count = 0; }
  if (++this.count > 120) throw new HttpException('Troppi tentativi', 429);
  const token = process.env.PRATOHUB_ADMIN_TOKEN;
  const actor = process.env.PRATOHUB_ADMIN_ACTOR;
  const request = context.switchToHttp().getRequest<Request>();
  const auth = request.headers.authorization || '';
  const supplied = /^Bearer ([a-f0-9]{64})$/.exec(auth)?.[1];
  if (!token || !/^[a-f0-9]{64}$/.test(token) || !actor || actor.trim() !== actor || actor.length < 3 || actor.length > 120 || actor.startsWith('REPLACE_') || Array.from(actor).some(c => c.charCodeAt(0) < 32 || c.charCodeAt(0) === 127) || !supplied || !timingSafeEqual(Buffer.from(token), Buffer.from(supplied))) throw new UnauthorizedException();
  return true;
 }
}
