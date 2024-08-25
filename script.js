document.getElementById("cmd-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        let input = this.value.trim();
        let output = document.getElementById("output");

        output.innerHTML += `C:\\>${input}\n`;

        // Fake command responses
        if (input.toLowerCase() === 'help') {
            output.innerHTML += "Fake CMD Commands Available: help, dir, cls, ping, gpupdate, netstat, tracert, nmap, whoami, ipconfig, shutdown /s /t 0, h4ck3rmode\n";
        } else if (input.toLowerCase() === 'dir') {
            output.innerHTML += "Volume in drive C has no label.\n Directory of C:\\\n\n<DIR>  .\n<DIR>  ..\n<DIR>  Users\n<DIR>  Windows\n\n";
        } else if (input.toLowerCase() === 'cls') {
            output.innerHTML = ''; // Clears the screen
        } else if (input.toLowerCase().startsWith('echo ')) {
            output.innerHTML += input.slice(5) + "\n";
        } else if (input.toLowerCase().startsWith('ping ')) {
            let fakePing = `Pinging ${input.slice(5)} with 32 bytes of data:\nReply from ${input.slice(5)}: bytes=32 time=1ms TTL=64\nReply from ${input.slice(5)}: bytes=32 time=1ms TTL=64\nReply from ${input.slice(5)}: bytes=32 time=1ms TTL=64\nReply from ${input.slice(5)}: bytes=32 time=1ms TTL=64\n\nPing statistics for ${input.slice(5)}:\n    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),\nApproximate round trip times in milli-seconds:\n    Minimum = 1ms, Maximum = 1ms, Average = 1ms\n`;
            output.innerHTML += fakePing;
        } else if (input.toLowerCase() === 'gpupdate') {
            output.innerHTML += "Updating policy...\nUser Policy update has completed successfully.\nComputer Policy update has completed successfully.\n";
        } else if (input.toLowerCase() === 'netstat') {
            output.innerHTML += `Active Connections\n\n  Proto  Local Address          Foreign Address        State\n  TCP    192.168.0.100:5000     192.168.0.1:443        ESTABLISHED\n  TCP    192.168.0.100:5001     172.217.3.238:443      CLOSE_WAIT\n  TCP    192.168.0.100:5002     13.107.4.50:443        TIME_WAIT\n\n`;
        } else if (input.toLowerCase().startsWith('tracert ')) {
            output.innerHTML += `Tracing route to ${input.slice(8)} over a maximum of 30 hops:\n\n  1    <1 ms    <1 ms    <1 ms  192.168.0.1\n  2     *        *        *     Request timed out.\n  3     *        *        *     Request timed out.\n  4     10 ms     9 ms     8 ms  ${input.slice(8)} [93.184.216.34]\n  5     9 ms     8 ms     8 ms  ${input.slice(8)} [93.184.216.34]\n\nTrace complete.\n`;
        } else if (input.toLowerCase().startsWith('nmap ')) {
            output.innerHTML += `Starting Nmap 7.91 ( https://nmap.org ) at 2024-08-25 22:55 UTC\nNmap scan report for ${input.slice(5)} (93.184.216.34)\nHost is up (0.0031s latency).\nNot shown: 993 closed ports\nPORT     STATE    SERVICE\n22/tcp   open     ssh\n80/tcp   open     http\n443/tcp  open     https\n\nNmap done: 1 IP address (1 host up) scanned in 1.35 seconds\n`;
        } else if (input.toLowerCase() === 'whoami') {
            output.innerHTML += `NT AUTHORITY\\SYSTEM (root access granted)\n`;
        } else if (input.toLowerCase() === 'ipconfig') {
            output.innerHTML += `Ethernet adapter Local Area Connection:\n\n   Connection-specific DNS Suffix  . : myfake.local\n   IPv4 Address. . . . . . . . . . . : 192.168.0.100\n   Subnet Mask . . . . . . . . . . . : 255.255.255.0\n   Default Gateway . . . . . . . . . : 192.168.0.1\n\n`;
        } else if (input.toLowerCase() === 'shutdown /s /t 0') {
            output.innerHTML += `Shutting down...\n\nJust kidding! This is a fake CMD.\n`;
        } else if (input.toLowerCase() === 'h4ck3rmode') {
            output.innerHTML += `Entering hacker mode...\n[+] Connecting to target...\n[+] Target compromised!\n[+] Downloading data...\n[+] Upload complete.\n[+] Exiting hacker mode...\n`;
        } else {
            output.innerHTML += `'${input}' is not recognized as an internal or external command,\noperable program or batch file.\n`;
        }

        output.innerHTML += "\n";
        this.value = "";
        output.scrollTop = output.scrollHeight; // Auto scroll to bottom
    }
});
