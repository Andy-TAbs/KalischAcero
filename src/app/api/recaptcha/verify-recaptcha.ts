// pages/api/verify-recaptcha.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY2 as string;

    const verifyRecaptcha = async (token: string) => {
            const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
                body: new URLSearchParams({
                    secret: RECAPTCHA_SECRET_KEY || '',
                    response: token,
                }),
            });

            const data = await res.json();
            return data.success;
        };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST') {
        const { token } = req.body;
        const isHuman = await verifyRecaptcha(token);

        if (!token) {
            return res.status(400).json({ error: "No token provided" });
        }

        if(isHuman) {
            res.status(200).json({ success: true });
        } else {
            res.status(400).json({ success: false });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
};