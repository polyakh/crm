export enum LeadLabel {
  HOT = "HOT",
  WARM = "WARM",
  COLD = "COLD",
}

export enum LeadSource {
  REFERRAL = "REFERRAL",
  WEBSITE = "WEBSITE",
  ADVERTISEMENT = "ADVERTISEMENT",
  OTHER = "OTHER",
}

export interface LeadAttributes {
  contactPerson: string;
  organization: string;
  ownerId: number;
  ownerName: string;
  leadSource?: LeadSource;
  leadLabel?: LeadLabel;
  expectedCloseDate?: Date;
  phone: string;
  email: string;
  statusId?: number;
  userId?: number;
}

export class MissingUpdatedAtError extends Error {
  constructor() {
    super("UpdatedAt is required.");
    this.name = "MissingUpdatedAtError";
  }
}

export class Lead {
  #contactPerson: string;
  #organization: string;
  #ownerId: number;
  #ownerName: string;
  #leadSource?: LeadSource;
  #leadLabel?: LeadLabel;
  #expectedCloseDate?: Date;
  #phone: string;
  #email: string;
  #statusId?: number;
  #userId?: number;

  constructor(attributes: LeadAttributes) {
    this.#contactPerson = attributes.contactPerson;
    this.#organization = attributes.organization;
    this.#ownerId = attributes.ownerId;
    this.#ownerName = attributes.ownerName;
    this.#leadSource = attributes.leadSource;
    this.#leadLabel = attributes.leadLabel;
    this.#expectedCloseDate = attributes.expectedCloseDate;
    this.#phone = attributes.phone;
    this.#email = attributes.email;
    this.#statusId = attributes.statusId;
    this.#userId = attributes.userId;
  }

  public get contactPerson(): string {
    return this.#contactPerson;
  }

  public get organization(): string {
    return this.#organization;
  }

  public get ownerId(): number {
    return this.#ownerId;
  }

  public get ownerName(): string {
    return this.#ownerName;
  }

  public get leadSource(): LeadSource | undefined {
    return this.#leadSource;
  }

  public get leadLabel(): LeadLabel | undefined {
    return this.#leadLabel;
  }

  public get expectedCloseDate(): Date | undefined {
    return this.#expectedCloseDate;
  }

  public get phone(): string {
    return this.#phone;
  }

  public get email(): string {
    return this.#email;
  }

  public get statusId(): number | undefined {
    return this.#statusId;
  }

  public get userId(): number | undefined {
    return this.#userId;
  }
}
