CREATE TABLE public.inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  inquiry_type text NOT NULL CHECK (inquiry_type IN ('travel_quote', 'business_meeting', 'appointment')),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  role_title text,
  destination text,
  departure_city text,
  travel_dates text,
  travelers text,
  budget text,
  travel_type text,
  accommodation text,
  activities text,
  occasion text,
  frequency text,
  message text,
  preferred_date text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.inquiries TO service_role;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.inquiries IS 'Qualified quote, business travel, and appointment requests submitted through the Luxora website.';