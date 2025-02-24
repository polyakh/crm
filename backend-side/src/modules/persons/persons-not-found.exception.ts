import { NotFoundException } from '@nestjs/common';

export class PersonsNotFoundException extends NotFoundException {
    constructor(id: string) {
        super(`Person with ID ${id} not found`);
    }
}