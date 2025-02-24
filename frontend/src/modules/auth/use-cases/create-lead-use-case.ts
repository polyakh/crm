import { Logger } from "~core/logging";
import { LeadClient } from "../api";
import { LeadSource, LeadLabel } from "../models";

export interface CreateLeadCriteria {
  contactPerson: string;
  organization: string;
  ownerId: number;
  ownerName: string;
  leadSource?: LeadSource;
  leadLabel?: LeadLabel;
  expectedCloseDate?: Date | string;
  phone: string;
  email: string;
}

export class CreateLeadUseCase {
  constructor(
    private logger: Logger,
    private httpClient: LeadClient,
  ) {}

  async execute(criteria: CreateLeadCriteria): Promise<any> {
    this.logger.info("Fetching all leads");

    try {
      const lead = await this.httpClient.createLead(criteria);

      // if (!leads || leads.length === 0) {
      //   this.logger.info("No leads found");
      //   return [];
      // }
      //
      // this.logger.info("Leads fetched successfully", { count: leads.length });
      return lead;
    } catch (error) {
      this.logger.error("Error fetching all leads", error);
      throw error;
    }
  }
}
