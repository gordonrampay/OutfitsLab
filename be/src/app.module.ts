@Module({
  imports: [
    ConfigModule,
    AuthModule,
    UsersModule,
    HealthModule,
  ],
})
export class AppModule {}