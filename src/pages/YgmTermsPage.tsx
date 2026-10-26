// src/pages/YgmTermsPage.tsx
// Service terms for YGM — Your Growth Matters. Deliberately one page covering
// engagement, cancellation and refunds together: for a service business those
// three are inseparable, and splitting them across pages (as the course-side
// policies are split) invites contradictions about which one governs.
import {
    Box, Container, Divider, Link, List, ListItem, ListItemText, Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import useScrollToHash from "../hooks/useScrollToHash.ts";
import Seo from "../components/Seo";
import { CONTACT } from "../data/servicesData";
import { ygm } from "../theme/ygmColors";

const EFFECTIVE_DATE = "26 October 2026";

const H = ({ children }: { children: React.ReactNode }) => (
    <Typography variant="h6" fontWeight={700} sx={{ mt: 4, mb: 1, color: ygm.ink }}>
        {children}
    </Typography>
);

const Bullets = ({ items }: { items: string[] }) => (
    <List sx={{ listStyleType: "disc", pl: 4, py: 0 }}>
        {items.map((item) => (
            <ListItem key={item} sx={{ display: "list-item", px: 0, py: 0.3 }}>
                <ListItemText primary={item} />
            </ListItem>
        ))}
    </List>
);

const YgmTermsPage = () => {
    useScrollToHash();

    return (
        <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#F8F9FA" }}>
            <Seo
                title="YGM Service Terms | Self Craft Skills"
                description="Service terms for YGM — Your Growth Matters: scope, channel access, billing, cancellation and refunds for social media and YouTube growth engagements."
                canonicalPath="/ygm-terms"
            />
            <Container maxWidth="md">
                <Typography sx={{
                    fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em",
                    textTransform: "uppercase", color: ygm.green, mb: 1,
                }}>
                    YGM — Your Growth Matters
                </Typography>
                <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
                    YGM Service Terms
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>
                    Effective Date: {EFFECTIVE_DATE}
                </Typography>
                <Divider sx={{ mb: 4 }} />

                <Typography paragraph>
                    These terms apply to the paid services offered under YGM — Your Growth
                    Matters, the social media and YouTube growth service operated by Self
                    Craft Skills. They cover monthly retainers, one-time channel audits and
                    consultations, and individual creative services ordered from the{" "}
                    <Link component={RouterLink} to="/services">published rate card</Link>.
                </Typography>
                <Typography paragraph>
                    Where these terms differ from the general Self Craft Skills{" "}
                    <Link component={RouterLink} to="/terms-and-conditions">Terms &amp; Conditions</Link>{" "}
                    or{" "}
                    <Link component={RouterLink} to="/refund-policy">Refund Policy</Link>{" "}
                    — which are written for course memberships — these terms govern YGM
                    service engagements.
                </Typography>

                <H>1. Who These Terms Cover</H>
                <Typography paragraph>
                    "We", "us" and "YGM" mean Self Craft Skills operating as YGM — Your
                    Growth Matters. "You" or "the client" means the individual, creator,
                    brand or business purchasing a YGM service. By paying for a plan or
                    service, you accept these terms.
                </Typography>

                <H>2. The Services We Provide</H>
                <Typography paragraph>
                    YGM provides social media and YouTube channel services, which may
                    include channel management, upload scheduling, SEO of titles,
                    descriptions and tags, playlist and metadata organisation, content
                    planning, competitor and keyword research, analytics reporting,
                    thumbnails and channel graphics, and short-form and long-form video
                    editing. The exact services included depend on the plan or individual
                    service you purchase, as described on the services page at the time of
                    purchase.
                </Typography>
                <Typography paragraph>
                    Monthly retainers are sold on a per-channel basis. Work on an
                    additional channel requires a separate plan or a custom quote.
                </Typography>

                <H>3. What Your Monthly Allowance Includes</H>
                <Typography paragraph>
                    Plans include stated quantities — for example a number of video uploads,
                    custom thumbnails or community post graphics per month. The following
                    applies to all such allowances:
                </Typography>
                <Bullets items={[
                    "Allowances are counted per calendar month of the billing cycle.",
                    "Unused allowance does not roll over into the following month and is not refundable or exchangeable.",
                    "One unit means one deliverable — for example one thumbnail concept taken through its included revisions, or one video uploaded and optimised.",
                    "Work beyond the included allowance is quoted and billed separately at the published rate card prices, and is only started once you confirm it in writing.",
                ]} />

                <H>4. Revisions</H>
                <Typography paragraph>
                    Creative deliverables include the number of revision rounds stated on
                    the services page — generally two rounds, and one round for Shorts and
                    Reels editing. A revision round means one consolidated set of feedback
                    sent together, not comments sent piecemeal over several days.
                </Typography>
                <Typography paragraph>
                    Please send revision requests within seven days of delivery. After the
                    included rounds are used, further changes are chargeable at the
                    applicable rate card price. A request that changes the original brief —
                    a new concept, a different video, or a change of direction — counts as
                    new work rather than a revision.
                </Typography>

                <H>5. Channel Access and Account Security</H>
                <Typography paragraph>
                    Channel management requires access to your channel. Access is granted
                    through YouTube Studio's own permission system — by adding us as a
                    Manager or Editor on your Brand Account, or the equivalent delegated
                    access on other platforms.
                </Typography>
                <Typography paragraph>
                    <strong>
                        We will not ask for, and you should not share, your Google account
                        password or one-time passwords.
                    </strong>{" "}
                    Password sharing breaches Google's own terms and puts your account at
                    risk of being locked or lost. If you send credentials anyway, you do so
                    at your own risk.
                </Typography>
                <Typography paragraph>
                    You remain the owner of your channel, content and all associated
                    accounts at all times. Within the access you grant us, we will not:
                </Typography>
                <Bullets items={[
                    "Delete your videos, playlists or channel.",
                    "Change your monetisation, payment or banking settings.",
                    "Change your account recovery details or remove your own access.",
                    "Publish anything you have not approved, except routine scheduled uploads agreed in advance as part of your plan.",
                ]} />
                <Typography paragraph sx={{ mt: 1 }}>
                    You can revoke our access at any time, and should do so when an
                    engagement ends. We will also remove ourselves from your channel on
                    request after the final month of service.
                </Typography>

                <H>6. What You Need to Provide</H>
                <Typography paragraph>
                    Our turnaround times depend on you. To deliver on schedule we need
                    timely access, raw footage and assets, brand materials where relevant,
                    and decisions or approvals when we ask for them.
                </Typography>
                <Typography paragraph>
                    Where a delay is caused by material, access or approval we are waiting
                    on, the affected deliverables move to the next available slot. Such
                    delays do not extend the billing month, pause the plan, or create a
                    right to a refund or to carry allowance forward.
                </Typography>

                <H>7. Your Content and Copyright</H>
                <Typography paragraph>
                    You confirm that you own, or hold the necessary licences for, all
                    footage, music, images, brand assets and claims in the content you
                    supply or ask us to publish, and that the content does not infringe
                    anyone's rights or breach any platform's policies.
                </Typography>
                <Typography paragraph>
                    We are not responsible for copyright claims, copyright strikes,
                    community guideline strikes, takedowns or demonetisation arising from
                    content you supplied or directed us to publish. If you ask us to source
                    stock assets, those assets remain subject to the licence they are
                    supplied under, and that licence is passed on to you.
                </Typography>

                <H>8. Deliverables, Ownership and Portfolio Use</H>
                <Typography paragraph>
                    Ownership of the creative deliverables we produce for you — thumbnails,
                    banners, community graphics, edited videos, written metadata and
                    documents — transfers to you once that work has been paid for in full.
                    Until payment is received in full, we retain ownership of those
                    deliverables.
                </Typography>
                <Typography paragraph>
                    Our own working methods, templates, internal tools, research formats and
                    report layouts remain ours, and nothing in these terms transfers them to
                    you.
                </Typography>
                <Typography paragraph>
                    We may show work produced for you — thumbnails, graphics, edits,
                    anonymised performance results and your channel name — in our portfolio,
                    website, social media and proposals. If you would prefer us not to, tell
                    us in writing at any time and we will stop using it going forward. We
                    will never publish your unreleased content, raw footage, revenue figures
                    or private analytics screenshots without your specific permission.
                </Typography>

                <H>9. Performance, Results and No Guarantee</H>
                <Typography paragraph>
                    <strong>
                        We do not guarantee any specific result.
                    </strong>{" "}
                    This includes, without limitation, subscriber growth, views, watch time,
                    click-through rate, impressions, reach, engagement, search ranking,
                    revenue, or approval into the YouTube Partner Programme or any other
                    monetisation programme.
                </Typography>
                <Typography paragraph>
                    Platform algorithms, audience behaviour, competition, your niche,
                    publishing consistency and the appeal of your content all affect
                    outcomes and are outside our control. What we commit to is the work
                    itself: performing the services in your plan with reasonable care and
                    skill, on the schedule agreed. Any figures, examples or past results
                    mentioned in our materials or conversations are illustrative and are not
                    a promise of your results.
                </Typography>

                <H>10. Platform Dependency</H>
                <Typography paragraph>
                    Our services operate inside platforms we do not control. We are not
                    liable for changes to platform policies, algorithms, features or APIs,
                    nor for strikes, demonetisation, restrictions, suspensions or account
                    loss — except where these result directly from our own negligence or
                    breach of these terms. Where a platform removes or changes a feature
                    your plan relies on, we will tell you and propose an equivalent.
                </Typography>

                <H>11. How We Work</H>
                <Typography paragraph>
                    We work only within platform rules. We do not buy subscribers, views,
                    likes, comments or engagement of any kind, use bots or engagement pods,
                    or take part in sub-for-sub schemes. We will not knowingly publish
                    misleading metadata, misleading thumbnails, or content that breaches a
                    platform's policies.
                </Typography>
                <Typography paragraph>
                    If you ask us to do something that breaches platform rules or these
                    terms, we will decline, and repeated requests may end the engagement
                    under section 18.
                </Typography>

                <H>12. Fees, Billing and Taxes</H>
                <Bullets items={[
                    "Monthly retainers are billed in advance. Your billing date is the date you signed up, and renews on the same date each month.",
                    "One-time services — channel audits, consultations and rate card work — are payable in full before the work begins or the session is held.",
                    "All prices are quoted in Indian Rupees (INR).",
                    "Self Craft Skills is not currently registered for GST. The prices shown are the total amount payable and no GST is added.",
                    "If GST registration becomes applicable to us in future, GST will apply to invoices issued from that point. We will tell you before that change affects your billing.",
                    "Any bank, payment gateway or currency conversion charges are your responsibility.",
                ]} />
                <Typography paragraph sx={{ mt: 1 }}>
                    Where a price is shown with an earlier price struck through, the amount
                    actually charged to you is the price you agreed at signup, and that is
                    the price that governs your engagement.
                </Typography>

                <H>13. Late or Failed Payment</H>
                <Typography paragraph>
                    If a renewal payment is not received by the billing date, we may pause
                    work on your channel until payment is received. Paused days are not
                    added to the end of your month and do not reduce that month's fee. If
                    payment remains outstanding for fifteen days, we may end the engagement
                    and remove our access to your channel.
                </Typography>

                <H>14. Changing or Pausing Your Plan</H>
                <Typography paragraph>
                    You may move to a higher plan at any time; the change applies from your
                    next billing date, or immediately if you choose to pay the difference
                    for the current month. Moving to a lower plan, or pausing your plan,
                    takes effect from your next billing date and needs at least fifteen
                    days' notice before that date.
                </Typography>
                <Typography paragraph>
                    A pause can be requested for up to two consecutive months. During a
                    pause no fee is charged, no work is carried out, and no allowance
                    accrues. We will tell you if we cannot hold your slot beyond an agreed
                    pause.
                </Typography>

                <H>15. Cancellation</H>
                <Typography paragraph>
                    You may cancel a monthly retainer by telling us in writing — by email or
                    WhatsApp — at least <strong>fifteen days before your next billing
                    date</strong>. Cancellation stops future billing. You keep the full
                    service for the month you have already paid for, and we complete the
                    deliverables due within it.
                </Typography>
                <Typography paragraph>
                    If notice is given less than fifteen days before the billing date, the
                    next month will be charged and will be your final month of service,
                    after which the engagement ends and no further billing occurs.
                </Typography>

                <H>16. Refunds</H>
                <Typography paragraph>
                    Our services are performed work rather than a returnable product, so
                    refunds are limited to the situations below.
                </Typography>
                <Bullets items={[
                    "Monthly retainers: the fee for a month that has already started is not refundable, because the slot is reserved and work begins at the start of the cycle. Cancelling stops future billing as described in section 15.",
                    "Channel audits: refundable in full if you cancel before we begin the audit. Once we have started reviewing your channel, the fee is not refundable, whether or not the report has been delivered yet.",
                    "Consultations: refundable in full, or rescheduled free of charge, if you tell us at least 24 hours before the scheduled time. Cancellations inside 24 hours, and missed sessions, are not refundable.",
                    "Rate card work: refundable in full before work starts. Once work has started it is not refundable, though any undelivered items in the same order are.",
                ]} />
                <Typography paragraph sx={{ mt: 1 }}>
                    If we are unable to deliver what you paid for — for example we cannot
                    start, or we end the engagement for a reason that is not your fault — we
                    will refund the fee for undelivered work on a pro-rata basis. Approved
                    refunds are returned to the original payment method within seven to ten
                    working days.
                </Typography>
                <Typography paragraph>
                    Dissatisfaction with channel performance is not grounds for a refund, as
                    explained in section 9.
                </Typography>

                <H>17. Confidentiality</H>
                <Typography paragraph>
                    Each of us may see information the other treats as private — your
                    analytics, revenue figures, unpublished content, strategy and plans, and
                    our pricing, processes and research. Both of us agree to keep that
                    information confidential, to use it only for the engagement, and not to
                    share it with anyone else without permission, except where disclosure is
                    required by law. This obligation continues after the engagement ends.
                </Typography>

                <H>18. Ending an Engagement From Our Side</H>
                <Typography paragraph>
                    We may end an engagement, with notice and a pro-rata refund of any fee
                    paid for work not yet delivered, if payment is overdue, if we are asked
                    to do something that breaches platform rules or the law, if the content
                    involved is unlawful, infringing, hateful or deceptive, or if
                    communication becomes abusive. We may also end an engagement for any
                    other reason by giving thirty days' notice.
                </Typography>

                <H>19. Limitation of Liability</H>
                <Typography paragraph>
                    To the extent permitted by law, our total liability arising out of or
                    connected with a YGM engagement is limited to the fees you paid us for
                    the three months immediately before the event giving rise to the claim.
                </Typography>
                <Typography paragraph>
                    We are not liable for indirect or consequential loss, including lost
                    revenue, lost profit, lost sponsorship or brand deals, lost subscribers
                    or views, loss of data, or loss of goodwill. Nothing in these terms
                    excludes liability that cannot lawfully be excluded.
                </Typography>

                <H>20. Working Days and Response Times</H>
                <Typography paragraph>
                    We work Monday to Friday, Indian Standard Time, excluding public
                    holidays. We aim to respond to messages within one working day. Timelines
                    quoted for deliverables are in working days unless stated otherwise.
                    Urgent work outside these hours can be arranged in advance and may carry
                    an additional charge.
                </Typography>

                <H>21. Changes to These Terms and to Pricing</H>
                <Typography paragraph>
                    We may update these terms from time to time. The version published on
                    this page, with the effective date shown above, is the version that
                    applies. Where a change materially affects an active engagement, we will
                    tell you before it takes effect.
                </Typography>
                <Typography paragraph>
                    Prices may change, but the rate you signed up on is held for your active
                    engagement. We will give at least thirty days' notice before a price
                    change applies to your renewals, and you may cancel under section 15 if
                    you do not wish to continue at the new rate.
                </Typography>

                <H>22. Governing Law and Jurisdiction</H>
                <Typography paragraph>
                    These terms are governed by the laws of India. Any dispute arising from
                    them is subject to the exclusive jurisdiction of the courts at Howrah,
                    West Bengal. Before starting formal proceedings, both of us agree to
                    first try to resolve the matter in good faith by direct discussion.
                </Typography>

                <H>23. Contact Us</H>
                <Typography paragraph>
                    Questions about these terms, or about an engagement, can be sent to:
                </Typography>
                <Typography paragraph>
                    Email:{" "}
                    <Link href={`mailto:${CONTACT.email}`}>{CONTACT.email}</Link>
                    <br />
                    WhatsApp:{" "}
                    <Link href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
                        Message us on WhatsApp
                    </Link>
                </Typography>
            </Container>
        </Box>
    );
};

export default YgmTermsPage;
