/*
  # Create Contact Inquiries Table

  1. New Tables
    - `contact_inquiries`
      - `id` (uuid, primary key) - Unique identifier for each inquiry
      - `name` (text) - Name of the person making the inquiry
      - `email` (text) - Email address
      - `phone` (text) - Phone number
      - `subject` (text) - Inquiry subject
      - `message` (text) - Inquiry message content
      - `created_at` (timestamptz) - Timestamp when inquiry was submitted
      - `status` (text) - Status of the inquiry (new, contacted, closed)
  
  2. Security
    - Enable RLS on `contact_inquiries` table
    - Add policy for inserting new inquiries (public access)
    - Add policy for authenticated users to view inquiries
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);