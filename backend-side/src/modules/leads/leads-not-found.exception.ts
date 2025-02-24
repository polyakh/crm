import { NotFoundException } from '@nestjs/common';

export class LeadsNotFoundException extends NotFoundException {
    constructor(id: string) {
        super(`Person with ID ${id} not found`);
    }
}