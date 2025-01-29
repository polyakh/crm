import { HttpClient } from '~core/services'
import { Logger } from '~core/services/winston-logger.ts'
import { User, UserAttributes } from './account-settings.model.ts'
import { UserMapper } from './entites/user-response-mapper.ts'


export class ApplicationError extends Error {
    constructor(
        message: string,
        public readonly code: string,
        public readonly statusCode: number = 500,
        public readonly meta?: object
    ) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

// src/core/errors/NotFoundError.ts
export class NotFoundError extends ApplicationError {
    constructor(message: string, meta?: object) {
        super(message, 'NOT_FOUND', 404, meta);
    }
}

export interface UserRepository {
    findById(id: string): Promise<User | undefined>;
}

export class UserRepository implements UserRepository {
    constructor(
        private readonly httpClient: HttpClient,
        private readonly logger: Logger
    ) {}

    async findById(id: string): Promise<User> {
        try {
            const user = await this.httpClient.get(`/users/${id}`);
            if (!user) {
                throw new NotFoundError(`User with id ${id} not found`);
            }

            return UserMapper.toDomain(user);
        } catch (error) {
            this.logger.error('Error finding user by id', error as Error);
            throw error;
        }
    }
}

