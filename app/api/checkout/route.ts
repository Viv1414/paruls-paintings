import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: NextRequest) {
  const { paintingId, title, price, image } = await req.json()

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'cad',
          product_data: {
            name: title,
            // images: image ? [image] : [], ADD THIS ONCE IMAGES AVAILABLE
          },
          unit_amount: price * 100, // Stripe uses cents
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?painting=${paintingId}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/gallery/${paintingId}`,
  })

  return NextResponse.json({ url: session.url })
}
