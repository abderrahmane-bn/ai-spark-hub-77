export type WorkshopStatus = "upcoming" | "past";
export type WorkshopType = "workshop" | "seminar" | "competition";
export type AudienceType = "representatives" | "students" | "public";
export type LocationType = "physical" | "webinar";

export interface ResourceItem {
  id: string;
  title: string;
  type: "pdf" | "slides" | "video" | "code" | "dataset";
  url: string;
  size?: string;
  description?: string;
}

export interface Workshop {
  id: string;
  title: string;
  type: WorkshopType;
  description: string;
  targetAudience: AudienceType;
  date: string;
  time: string;
  location: LocationType;
  venue?: string;
  status: WorkshopStatus;
  department: string;
  topic: string;
  resourceUrl?: string;
  resources?: ResourceItem[];
  agenda?: { time: string; item: string }[];
  prerequisites?: string[];
  instructor: string;
  instructorId?: string;
  maxParticipants: number;
  enrolled: number;
}

export interface Representative {
  id: string;
  fullName: string;
  title: string;
  photo: string;
  department: string;
  aiFocus: string;
  validated: boolean;
  bio: string;
  workshopsLed: number;
}

export interface Department {
  id: string;
  name: string;
  workshopCount: number;
  representativeCount: number;
  participantCount: number;
}

export interface Partner {
  id: string;
  name: string;
  type: "industry" | "rectorate" | "academic";
  logo?: string;
  description: string;
}
