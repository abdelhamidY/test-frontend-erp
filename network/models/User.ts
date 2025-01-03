export interface User {
  id: string;
  ref_id: string;
  user_type: string;
  avatar: string;
  email: string;
  first_name: string;
  country: string;
  last_name: string;
  dob: string;
  phone_country_code: string;
  phone_number: string;
  status: string;
  is_email_verified: string;
  permissions: {
    organization_id: string;
    org_ref_id: string;
    subdomain: string;
    roles: string[];
    on_boarded: boolean;
    kyc: string;
    on_boarding_steps: string;
    account_status: string;
  };
}
