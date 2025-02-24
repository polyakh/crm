import { Logger } from "~core/logging";
import { LeadClient } from "../api";

interface GetLeadByIdParams {
  leadId: string;
}

export class GetLeadByIdUseCase {
  constructor(
    private logger: Logger,
    private httpClient: LeadClient,
  ) {}

  async execute({ leadId }: GetLeadByIdParams): Promise<any | undefined> {
    if (!leadId) {
      this.logger.warn("Lead ID is required", { leadId });
      throw new Error("Lead ID is required");
    }

    this.logger.info("Fetching lead by ID", { leadId });

    try {
      const lead = await this.httpClient.getLead(leadId);

      if (!lead) {
        this.logger.info("Lead not found", { leadId });
        return undefined; // Use null instead of undefined for consistency
      }

      this.logger.info("Lead fetched successfully", { leadId });
      return lead;
    } catch (error) {
      // this.logger.error('Error fetching user', { userId, error });
      // this.handleError(error, 'GetUserByIdUseCase');
    }
  }
}
