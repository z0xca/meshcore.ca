---
title: MeshCore FAQ
sidebar:
  order: 2
  label: FAQ
---

## General

<details>
  <summary>What frequencies does MeshCore use in Canada?</summary>
  MeshCore Canada communities should start with the USA/Canada (Recommended) preset.
  
  If your app or config tool shows raw radio values instead of a named preset, use:
  
  | Field            | Value         |
  | ---------------- | ------------- |
  | Frequency        | `910.525 MHz` |
  | Bandwidth        | `62.5 kHz`    |
  | Spreading Factor | `SF7`         |
  | Coding Rate      | `5`           |
  
  Always check your local province or community page in case a nearby mesh publishes a different setting.
</details>

<details>
  <summary>What is 3-byte path hash mode?</summary>
  MeshCore adverts include compact path identifiers. MeshCore Canada recommends **3-byte** path hashes because larger repeater-backed networks have more room for unique identifiers than with the legacy 1-byte setting.

In the MeshCore CLI, use:

```text
set path.hash.mode 2
```

</details>

<details>
  <summary>Do I need a ham radio license?</summary>
  MeshCore Canada cannot give legal advice. Most Canadian MeshCore community docs assume licence-exempt LoRa operation in the appropriate ISM band, but you are responsible for using legal frequencies, power levels, antennas, and duty cycle in your location.

If you are operating as an amateur radio station or using non-standard equipment, check the current ISED rules and local amateur radio guidance before transmitting.

</details>

<details>
  <summary>What range should I expect?</summary>
  Range depends heavily on antenna quality, height, terrain, obstructions, noise floor, and line of sight. A handheld device indoors may only cover a neighborhood. A well-placed outdoor repeater with a clear antenna view can cover much more.
  
  For troubleshooting, compare against a nearby known-good node before assuming the firmware or MQTT path is broken.

</details>

## Hardware

<details>
  <summary>What devices are compatible with MeshCore?</summary>
  Use devices listed by the MeshCore Flasher or by a MeshCore Canada build guide for the role you need. Compatibility varies by radio chip, flash size, board wiring, display, battery hardware, and WiFi support.
  
  Standalone MQTT observer firmware targets WiFi-capable LoRa boards published by the [observer flasher setup guide](../../../analyzer/builds/mqtt-firmware).
</details>

<details>
  <summary>Can I use my Meshtastic device with MeshCore?</summary>
  Sometimes, but it must be flashed with MeshCore firmware and supported by the MeshCore build you choose. A device running Meshtastic firmware will not join a MeshCore mesh.
  
  Back up any identity or configuration you care about before reflashing. Treat a first MeshCore flash as a new setup.
</details>

<details>
  <summary>Which board should I buy first?</summary>
  For a first companion, choose a board or ready-made device that is listed in the official MeshCore tools and has community support near you. For a fixed repeater or observer, prioritize stable power, a good antenna path, and remote access over display features.
</details>

## Network

<details>
  <summary>How do I join an existing mesh network?</summary>
  <ol>
    <li>Find your local page in the  <a href="(../../../../../provinces">Mesh Directory</a></li>
    <li>Set the radio preset to **USA/Canada (Recommended)** unless the local page says otherwise.</li>
    <li>Set path hash mode to **3-byte**.</li>
    <li>Reboot the device after changing radio settings.</li>
    <li>Send an advert and check whether nearby users can see you.</li>
  </ol>
</details>

<details>
  <summary>How do I set up a new mesh in my area?</summary>
  Use the MeshCore Canada baseline unless you have a local reason to publish a different setting:

```text
set radio 910.525,62.5,7,5
set path.hash.mode 2
```

Then open an update request through [Contributing](../../../../../contributing) so the directory can list the community, region, status, contacts, and any setting differences.

</details>

<details>
  <summary>Why does my observer show no packets?</summary>
  A broker connection only proves the observer reached MQTT. It may still hear no mesh traffic if the radio preset is wrong, path hash mode is wrong, packet publishing is disabled, or no nearby nodes are active.

Use [Check Your Observer](../../../../../analyzer/verify) and [Troubleshooting](../../../../../analyzer/troubleshooting) to narrow the symptom.

</details>
