---
title: MeshCore How To
sidebar:
  order: 3
  label: How To
---

The MeshCore How-To section provides simple, step-by-step guides for the most common tasks you’ll perform on the Ottawa MeshCore network.
Whether you’re sharing your contact URL, importing someone else’s, or tracing multi-hop routes across the mesh, each walkthrough is designed to be clear, visual, and easy to follow.

These instructions use the MeshCore mobile app and apply to both new and experienced users. More guides will be added as the platform grows and as the community discovers useful workflows.

## How to Share Your Contact URL

1. Open the MeshCore app and connect to your node.

2. Tap the **Signal** icon.

   ![Signal icon](../../../../assets/meshcore/general/howto/MeshCore_GetContactID1.png)

3. Tap **Advert · To Clipboard**.

   ![Advert · To Clipboard button](../../../../assets/meshcore/general/howto/MeshCore_GetContactID2.png)

4. Paste your contact URL anywhere you want to share it.

---

## How to Import a Contact URL

1. Open the app and connect to your node.

2. Tap the **three dots**.

   ![Three dots icon](../../../../assets/meshcore/general/howto/MeshCore_AddContactMan1.png)

3. Tap **Add Contact**.

   ![Add Contact button](../../../../assets/meshcore/general/howto/MeshCore_AddContactMan2.png)

4. Tap **Import from Clipboard Link**.

   ![Import from Clipboard Link button](../../../../assets/meshcore/general/howto/MeshCore_AddContactMan3.png)

5. After a few seconds you will see "Success - contact has been imported"

   ![New Contact Discovered and Success - Contact has been imported notificatons](../../../../assets/meshcore/general/howto/MeshCore_AddContactMan5.png)

6. A second popup appears: "New Contact Discovered \<NAME\>"

7. The contact is now added.

---

## How to Trace Route to a Node (1 Hop)

1. Open the app and connect.

2. Tap the **three dots**.

   ![Three dots icon](../../../../assets/meshcore/general/howto/MeshCore_TraceRoute1.png)

3. Tap **Tools**.

   ![Tools button](../../../../assets/meshcore/general/howto/MeshCore_TraceRoute2.png)

4. Tap **Trace Path · Manual**.

   ![Trace Path · Manual card](../../../../assets/meshcore/general/howto/MeshCore_TraceRoute3.png)

5. Tap the **plus button**.

   ![Plus button](../../../../assets/meshcore/general/howto/MeshCore_TraceRoute4.png)

6. Select a repeater and confirm.

   ![Check and confirm buttons](../../../../assets/meshcore/general/howto/MeshCore_TraceRoute1Hop1.png)

7. You will see one repeater ID; this indicates a **1-hop trace**.

   ![Path input field and Run Trace button](../../../../assets/meshcore/general/howto/MeshCore_TraceRoute1Hop2.png)

8. Tap **Trace Path**.

---

## How to Trace Route to a Node (2+ Hops)

1. Open the app and connect.

2. Tap the **three dots**.

   ![Three dots icon](./../../../../assets/meshcore/general/howto/MeshCore_TraceRoute1.png)

3. Tap **Tools**.

   ![Tools button](./../../../../assets/meshcore/general/howto/MeshCore_TraceRoute2.png)

4. Tap **Trace Path · Manual**.

   ![Trace Path · Manual card](./../../../../assets/meshcore/general/howto/MeshCore_TraceRoute3.png)

5. Tap the **plus button**.

   ![Plus button](./../../../../assets/meshcore/general/howto/MeshCore_TraceRoute4.png)

6. Select repeaters **in order**:
   - Choose the **forward path**
   - Confirm
   - Re-open the add menu and choose the **return path**
   - Or manually enter IDs:
   - Example: `d3, f3, d3`

   ![Check and confirm buttons](./../../../../assets/meshcore/general/howto/MeshCore_TraceRoute2Hop1.png)

7. Confirm both forward and return paths, then tap **Trace**.

   ![Path input field and Run Trace button](./../../../../assets/meshcore/general/howto/MeshCore_TraceRoute2Hop2.png)

8. View the results.

   ![Trace route results](./../../../../assets/meshcore/general/howto/MeshCore_TraceRoute2Hop3.png)

---

## Heard Repeats

In the MeshCore app you can generally see if a repeater heard your message you sent in a channel.

When you send a message out, the packet travels through the airwaves, hits a nearby repeater and it then repeats your packet out. If your companion is within receiving range and receives the repeated packet, it will be counted as a "heard repeat". There are cases where your companion could miss the heard repeat. Examples of this are:

- Your packet makes it to the repeater, but the repeated packet dosn't make it back to your companion.

- If you're using a 1w companion, and the repeater that hears you is a 0.3w. You can send further than it - so while your packet may make it to the repeater, when it repeats your packet it's possible you're too far away to receive it.

## How to Check Heard Repeats

1. Send a message in the public channel.

2. When the app shows **Heard X repeats** under your message, press and hold the message.

   ![Heard X repeats indicator](../../../../assets/meshcore/general/howto/MeshCore_HeardRepeats_Step1.png)

3. Tap **Heard Repeats**.

   ![Heard Repeats card](../../../../assets/meshcore/general/howto/MeshCore_HeardRepeats_Step2.png)

4. You’ll see a list of every repeater your companion heard repeating that packet.

   ![List of repeaters repeating the packet](../../../../assets/meshcore/general/howto/MeshCore_HeardRepeats_Step3.png)

5. Tap a repeater in the list to view the path the repeated packet took to get back to you. See Below for the types of repeats you will see.

### Notes

- A repeater may show up as a **direct hop** if it is close to you.
- You may also see a **distant repeater** listed. This happens when that repeater hears your packet shortly after another one and your companion hears both repeats.
- Your companion must hear the repeater _directly_ for it to appear in this list.

---

### Direct Heard Packet

Below is an example of what a direct heard packet looks like:

![Diagram Explanation](../../../../assets/meshcore/general/howto/MeshCore_HeardRepeats_Direct.png)

![Companion View](../../../../assets/meshcore/general/howto/MeshCore_HeardRepeats_Step4_1Repeat.png)

---

### Multi Hop Heard Packet

Below is an example of what it looks like when one repeater hears your message, repeats it, and then your companion hears a second repeater’s repeat of that same packet:

![Diagram Explanation](../../../../assets/meshcore/general/howto/MeshCore_HeardRepeats_MultiHop.png)

![Companion View](../../../../assets/meshcore/general/howto/MeshCore_HeardRepeats_Step4_2Repeat.png)
