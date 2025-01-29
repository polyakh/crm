abstract class UseCase<Params, ReturnType> {
  constructor(
    protected loggingService: LoggingService,
    protected notificationService?: NotificationService,
  ) {}

  abstract execute(params: Params): Promise<Result<ReturnType>>;
}
