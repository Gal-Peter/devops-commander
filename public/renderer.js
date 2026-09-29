// Master tokenized database map tracking 100 core DevOps system shortcuts
const commandDatabase = {
  Linux: [
    { text: "ls -la", desc: "List all directory entries including hidden dotfiles using long form formatting metrics" },
    { text: "df -h", desc: "Display free and used disk space layouts across mounted hardware filesystems in human readable format" },
    { text: "top", desc: "Launch dynamic live operating system process tracking monitor engine parameters" },
    { text: "grep -rnw '.' -e '{search_text}'", desc: "Search recursively for a specific string text parameter inside all local directory files", inputs: ["search_text"] },
    { text: "chmod {permissions} {file_path}", desc: "Modify read/write/execute system access file permission flags on a specific target path", inputs: ["permissions", "file_path"] },
    { text: "ps aux", desc: "Display a snapshot of all currently running processes across every system user account" },
    { text: "kill -9 {pid}", desc: "Forcefully terminate an errant system process immediately by its Process ID token", inputs: ["pid"] },
    { text: "free -m", desc: "Display total, used, and available system RAM memory allocations measured in Megabytes" },
    { text: "du -sh *", desc: "Calculate and summarize total disk space consumption for every individual directory in the current path" },
    { text: "tail -f {log_file}", desc: "Open a continuous live-stream tracker to monitor appending lines on a target system log file", inputs: ["log_file"] },
    { text: "netstat -tuln", desc: "Scan active system sockets to list all TCP/UDP ports currently listening for network traffic" },
    { text: "lsof -i :{port_number}", desc: "Identify and locate the exact running process currently binding a specific target network port", inputs: ["port_number"] },
    { text: "uname -a", desc: "Print comprehensive system architecture details, kernel release versions, and OS environment specs" },
    { text: "history | grep '{keyword}'", desc: "Query and filter the system terminal history execution logs to locate past input lines", inputs: ["keyword"] },
    { text: "ping -c 4 {hostname}", desc: "Send an ICMP echo echo-request packet array to verify external remote network host connectivity", inputs: ["hostname"] },
    { text: "curl -I {url}", desc: "Fetch and display the raw HTTP header payload metadata returned by a specific target remote server URL", inputs: ["url"] },
    { text: "nslookup {domain_name}", desc: "Query local and public DNS servers to resolve the official network IP addresses of a domain", inputs: ["domain_name"] },
    { text: "ip addr show", desc: "Display complete hardware configuration properties for all local ethernet and wireless network interfaces" },
    { text: "find . -name '{filename_pattern}'", desc: "Recursively search the active sub-tree directory matrix to pinpoint filenames matching patterns", inputs: ["filename_pattern"] },
    { text: "tar -czvf {archive_name}.tar.gz {folder_path}", desc: "Compress and package an entire target folder directory into a lightweight gzip archive format", inputs: ["archive_name", "folder_path"] },
    { text: "tar -xzvf {archive_name}.tar.gz", desc: "Extract and unpack the complete file structure compressed inside a gzip tar archive container", inputs: ["archive_name"] },
    { text: "ln -s {target_source} {symlink_name}", desc: "Generate a symbolic shortcut path link mapping an active directory resource to a new location", inputs: ["target_source", "symlink_name"] },
    { text: "chown -R {user}:{group} {folder_path}", desc: "Recursively re-assign official security owner and group access metadata variables for a target folder", inputs: ["user", "group", "folder_path"] },
    { text: "systemctl status {service_name}", desc: "Check the operational lifecycle, initialization state, and recent errors for a systemd daemon service", inputs: ["service_name"] },
    { text: "journalctl -xe -u {service_name} --no-pager", desc: "Dump the absolute latest diagnostic journal system logs for a specific service container asset", inputs: ["service_name"] }
  ],
  Git: [
    { text: "git status", desc: "Evaluate tracking status metrics for unstaged, staged, or modified codebase layers" },
    { text: "git branch -a", desc: "List all localized and remote tracking branch paths associated with your repository" },
    { text: "git log --oneline -n 5", desc: "Print the last 5 repository history commits collapsed into single optimized lines" },
    { text: "git checkout -b {new_branch_name}", desc: "Create an isolated fresh branch tracking path and switch your workspace directly onto it", inputs: ["new_branch_name"] },
    { text: "git commit -m '{commit_message}'", desc: "Lock down your staged code changes into your local history stream repository with a metadata note", inputs: ["commit_message"] },
    { text: "git add .", desc: "Stage every single file modification, insertion, or deletion across the current directory workspace" },
    { text: "git push origin {branch_name}", desc: "Transmit your locally committed transaction history history layer up to the remote branch hub repository", inputs: ["branch_name"] },
    { text: "git pull origin {branch_name}", desc: "Fetch and merge the absolute latest code adjustments down from the upstream remote repository", inputs: ["branch_name"] },
    { text: "git fetch --all --prune", desc: "Synchronize remote reference lists and automatically purge dead stale remote tracking branch paths" },
    { text: "git checkout {existing_branch_name}", desc: "Safely switch your active desktop code file directory over to a different tracked code branch", inputs: ["existing_branch_name"] },
    { text: "git merge {target_branch_name}", desc: "Integrate the historic commit timeline layers of a separate target branch right into your current branch", inputs: ["target_branch_name"] },
    { text: "git stash", desc: "Temporarily shelve uncommitted directory changes to restore a clean directory state workspace layout", },
    { text: "git stash pop", desc: "Retrieve your last stashed change layout and apply it directly back onto your active workspace files" },
    { text: "git remote -v", desc: "List the official fetch and push repository link paths mapped for upstream cloud server targets" },
    { text: "git reset --hard HEAD", desc: "Wipe out all uncommitted workspace code changes completely to match your last clean git history commit" },
    { text: "git revert {commit_hash}", desc: "Generate a completely new inverse commit that safely rolls back changes made in an old specific transaction", inputs: ["commit_hash"] },
    { text: "git reset --soft HEAD~1", desc: "Undo your last local commit block but preserve all modified code directly back into your staging area" },
    { text: "git diff", desc: "View the exact line-by-line text modifications made inside your unstaged workspace files" },
    { text: "git diff --staged", desc: "Examine line-by-line character code modifications currently sitting inside your active staging deck" },
    { text: "git log --graph --oneline --decorate --all", desc: "Render a comprehensive visual topological tree grid mapping all branches and history lines" },
    { text: "git clone {repository_url}", desc: "Download and initialize a complete replica workspace tree from a remote cloud git repository url", inputs: ["repository_url"] },
    { text: "git config --global user.name '{your_name}'", desc: "Register your global developer identification name metadata across your machine's system engine", inputs: ["your_name"] },
    { text: "git config --global user.email '{your_email}'", desc: "Register your global communication email metadata reference across your machine's project layers", inputs: ["your_email"] },
    { text: "git clean -fd", desc: "Forcefully strip out all untracked files and raw empty directories from your project path", },
    { text: "git show {commit_hash}", desc: "Extract the complete metadata payload description and detailed file diff logs for a specific commit", inputs: ["commit_hash"] }
  ],
  Docker: [
    { text: "docker ps -a", desc: "List all container environments currently initialized, active, or resting inside your local registry" },
    { text: "docker images", desc: "Display complete localized cache blueprint mapping rows currently registered on your PC" },
    { text: "docker logs --tail {lines_count} {container_id}", desc: "Extract the absolute latest live stream console execution outputs from a specific target container", inputs: ["lines_count", "container_id"] },
    { text: "docker exec -it {container_id} {shell_type}", desc: "Open a live interactive command prompt connection box directly inside a running sandbox container", inputs: ["container_id", "shell_type"] },
    { text: "docker run -d -p {host_port}:{container_port} --name {app_name} {image_name}", desc: "Initialize and spin up a brand new microservice container completely isolated in the background background process loop", inputs: ["host_port", "container_port", "app_name", "image_name"] },
    { text: "docker stop {container_id}", desc: "Gracefully transmit a shutdown signal to stop a running container execution process layer", inputs: ["container_id"] },
    { text: "docker start {container_id}", desc: "Wake up and initialize an existing stopped container configuration workspace block", inputs: ["container_id"] },
    { text: "docker restart {container_id}", desc: "Execute a rapid recycling power turn to reboot a running microservice container instance", inputs: ["container_id"] },
    { text: "docker rm {container_id}", desc: "Permanently delete a stopped container environment asset configuration block from your machine disk", inputs: ["container_id"] },
    { text: "docker rmi {image_id}", desc: "Purge a specific cached container blueprint layer image completely from your local repository system", inputs: ["image_id"] },
    { text: "docker build -t {image_name}:{tag} {dockerfile_dir}", desc: "Compile a extensionless blueprint script into a functional deployable container file layer", inputs: ["image_name", "tag", "dockerfile_dir"] },
    { text: "docker system prune -a --volumes -f", desc: "Execute a massive deep space wipe to purge all dead containers, cached layers, and unused networks", },
    { text: "docker inspect {object_id}", desc: "Extract comprehensive low-level JSON configuration schema blueprints for any docker resource asset", inputs: ["object_id"] },
    { text: "docker network ls", desc: "Evaluate isolated virtual network communication layers deployed across your host machine" },
    { text: "docker volume ls", desc: "List all persistent independent storage hardware drives currently registered in local tracking scopes" },
    { text: "docker stats", desc: "Launch a live, continuous telemetry monitor box evaluating CPU, RAM, and stream usage across active containers" },
    { text: "docker compose up -d", desc: "Boot up a multi-container stack network structure safely managed in background background process threads", },
    { text: "docker compose down", desc: "Dismantle and stop a complete multi-container stack, purging internal network configuration bridges", },
    { text: "docker compose ps", desc: "List configuration states and validation bounds specifically for active multi-container app groups", },
    { text: "docker compose logs -f --tail=100", desc: "Stream real-time log aggregates across an entire multi-container service group orchestrator", },
    { text: "docker top {container_id}", desc: "Display active engine task tracking PIDs running directly inside an isolated microservice container", inputs: ["container_id"] },
    { text: "docker port {container_id}", desc: "Audit and verify exactly what host machine port mappings point inside an active container environment", inputs: ["container_id"] },
    { text: "docker volume prune -f", desc: "Purge all unattached, orphaned storage volume containers to reclaim massive hardware memory spaces", },
    { text: "docker network prune -f", desc: "Clear away all dead or unassigned custom network communication bridge channels completely", },
    { text: "docker cp {local_file_path} {container_id}:{target_dest_path}", desc: "Inject and copy a file or script resource straight from your computer hard drive inside a running container", inputs: ["local_file_path", "container_id", "target_dest_path"] }
  ],
  Kubernetes: [
    { text: "kubectl get nodes", desc: "Poll active cluster state to monitor operational health metrics for compute host workers" },
    { text: "kubectl get pods -A", desc: "List active microservice capsule runtimes deployed across all namespace boundary boxes" },
    { text: "kubectl logs {pod_name} -n {namespace}", desc: "Stream standard out execution records from an active container capsule inside a chosen namespace", inputs: ["pod_name", "namespace"] },
    { text: "kubectl describe pod {pod_name} -n {namespace}", desc: "Poll detailed low-level configuration events and mapping states for a specific cluster container pod", inputs: ["pod_name", "namespace"] },
    { text: "kubectl get services -n {namespace}", desc: "List all virtual internal route cluster IPs and load-balancer mappings defined in a namespace", inputs: ["namespace"] },
    { text: "kubectl get deployments -n {namespace}", desc: "Check operational state replication targets and healthy pods scaling bounds for cluster managers", inputs: ["namespace"] },
    { text: "kubectl apply -f {yaml_manifest_path}", desc: "Inject, parse, and deploy a standard structural configuration declarative configuration layer asset", inputs: ["yaml_manifest_path"] },
    { text: "kubectl delete -f {yaml_manifest_path}", desc: "Dismantle and forcefully strip out all resource assets tracked inside a declarative configuration script", inputs: ["yaml_manifest_path"] },
    { text: "kubectl scale deployment {deployment_name} --replicas={count} -n {namespace}", desc: "Scale the active running worker container pod count for a target service deployment up or down on the fly", inputs: ["deployment_name", "count", "namespace"] },
    { text: "kubectl exec -it {pod_name} -n {namespace} -- {shell_type}", desc: "Open a secure live diagnostic terminal shell loop directly inside an active running cluster pod", inputs: ["pod_name", "namespace", "shell_type"] },
    { text: "kubectl get events --sort-by='.metadata.creationTimestamp' -A", desc: "Dump an ordered historic timeline log tracking recent operational warnings and adjustments inside the cluster" },
    { text: "kubectl rollout status deployment/{deployment_name} -n {namespace}", desc: "Track a live progressive revision release state sequence to confirm compilation boundaries complete cleanly", inputs: ["deployment_name", "namespace"] },
    { text: "kubectl rollout undo deployment/{deployment_name} -n {namespace}", desc: "Execute an instant fallback command to roll back your live service deployment to its prior historical stable state", inputs: ["deployment_name", "namespace"] },
    { text: "kubectl get ingress -A", desc: "List active external routing gateway boundaries and host domain paths mapped in the current cluster" },
    { text: "kubectl get configmaps -n {namespace}", desc: "Audit structural plain-text variable parameters and environment settings sheets inside a namespace", inputs: ["namespace"] },
    { text: "kubectl get secrets -n {namespace}", desc: "List encrypted secure token storage containers and token keys sitting inside your workspace", inputs: ["namespace"] },
    { text: "kubectl port-forward {pod_name} {local_port}:{pod_port} -n {namespace}", desc: "Bind a safe direct tunnel channel mapping a local machine port right to an isolated running cluster pod", inputs: ["pod_name", "local_port", "pod_port", "namespace"] },
    { text: "kubectl top pods -n {namespace}", desc: "Display real-time consumption rates evaluating exactly what cluster pods are maxing out node CPU/RAM limits", inputs: ["namespace"] },
    { text: "kubectl get namespaces", desc: "List all administrative logical isolation boundary boxes configured inside the target cluster topology" },
    { text: "kubectl delete pod {pod_name} -n {namespace}", desc: "Forcefully terminate an active pod container runtime, causing the orchestrator cluster to auto-heal a fresh one", inputs: ["pod_name", "namespace"] },
    { text: "kubectl config get-contexts", desc: "List all authenticated remote clusters, user accounts, and access credential tags stored on your machine" },
    { text: "kubectl config use-context {context_name}", desc: "Instantly switch your machine's active network pointer target to manage a completely different remote cluster", inputs: ["context_name"] },
    { text: "kubectl edit deployment {deployment_name} -n {namespace}", desc: "Open the live live YAML manifest data sheet inside a terminal editor box to change live resource targets", inputs: ["deployment_name", "namespace"] },
    { text: "kubectl get all -n {namespace}", desc: "Execute an absolute structural query sweep to list every pod, deployment, replicaset, and service in a path", inputs: ["namespace"] },
    { text: "kubectl run temporary-shell --rm -i --tty --image=alpine -- --no-cache sh", desc: "Deploy a clean, ephemeral sandbox testing container capsule that auto-deletes immediately upon session disconnect" }
  ]
};
function mountApplicationUI() {
  const container = document.getElementById('root');
  
  let activeCategory = "Linux";
  let terminalConsoleLog = "📟 Interactive Shell System Online. Awaiting injection instructions...\n";
  let currentHoverText = "Hover your mouse pointer over any terminal command to extract its explanation details here.";

  function renderViewState() {
    let sidebarButtonsHtml = "";
    Object.keys(commandDatabase).forEach(catName => {
      const isSelected = activeCategory === catName;
      sidebarButtonsHtml += `
        <button 
          id="tab-${catName}"
          style="padding: 10px 16px; border-radius: 8px; text-align: left; font-size: 14px; border: none; font-weight: 600; cursor: pointer; transition: all 0.2s; width: 100%; margin-bottom: 4px;
          background-color: ${isSelected ? '#2563eb' : 'transparent'};
          color: ${isSelected ? '#ffffff' : '#9ca3af'};"
        >
          ${catName} CLI Matrix
        </button>
      `;
    });

    let commandCardsHtml = "";
    commandDatabase[activeCategory].forEach((cmd, i) => {
      commandCardsHtml += `
        <div 
          id="cmd-card-${i}"
          style="background-color: #1e293b; border: 1px solid #334155; border-radius: 10px; padding: 14px; display: flex; align-items: center; justify-content: space-between; transition: border 0.2s; cursor: pointer;"
        >
          <code style="font-family: monospace; font-size: 13px; color: #38bdf8; font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 70%;" title="${cmd.text}">${cmd.text}</code>
          <button 
            id="btn-exec-${i}"
            style="background-color: #2563eb; color: #ffffff; border: none; font-size: 11px; font-weight: bold; padding: 6px 12px; border-radius: 6px; cursor: pointer;"
          >
            RUN ⚡
          </button>
        </div>
      `;
    });

    container.innerHTML = `
      <div style="background-color: #1e293b; padding: 16px 24px; display: flex; align-items: center; border-bottom: 1px solid #334155;">
        <div style="background-color: #2563eb; padding: 8px 12px; font-weight: bold; border-radius: 6px; font-size: 14px; margin-right: 12px;">📟</div>
        <h2 style="margin: 0; font-size: 18px; font-weight: 700; color: #ffffff;">DevOps Terminal Commander</h2>
      </div>

      <div style="flex: 1; display: grid; grid-template-columns: 240px 1fr; overflow: hidden; height: calc(100vh - 65px);">
        <div style="background-color: #111827; padding: 16px; border-right: 1px solid #1f2937; display: flex; flex-direction: column; gap: 8px; justify-content: flex-start; align-items: flex-start;">
          ${sidebarButtonsHtml}

          <div style="margin-top: auto; background-color: #1e293b; border-radius: 10px; padding: 14px; font-size: 12px; line-height: 1.5; color: #cbd5e1; border: 1px solid #334155; width: calc(100% - 28px);">
            <strong style="display: block; margin-bottom: 4px; color: #38bdf8;">🧠 Explanation Descriptor:</strong>
            <span id="explanation-box">${currentHoverText}</span>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; padding: 24px; gap: 20px; overflow-y: auto; background-color: #0f172a;">
          <h3 style="margin: 0; font-size: 14px; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em;">Available Commands Suite (${commandDatabase[activeCategory].length} Items Loaded)</h3>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px;">
            ${commandCardsHtml}
          </div>

          <div style="margin-top: auto; display: flex; flex-direction: column; gap: 8px;">
            <div style="font-size: 12px; font-weight: bold; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Live Shell Execution Stream Console</div>
            <pre style="background-color: #020617; border: 1px solid #1e293b; padding: 16px; border-radius: 10px; font-family: monospace; font-size: 12px; color: #4ade80; overflow: auto; max-height: 200px; margin: 0; white-space: pre-wrap; line-height: 1.5;">${terminalConsoleLog}</pre>
          </div>
        </div>
      </div>

      <div id="modal-container" style="display: none; position: fixed; inset: 0; background-color: rgba(2, 6, 23, 0.75); backdrop-filter: blur(4px); align-items: center; justify-content: center; z-index: 50;">
        <div style="background-color: #1e293b; border: 1px solid #334155; border-radius: 14px; width: 450px; padding: 24px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);">
          <h3 style="margin: 0 0 8px 0; font-size: 16px; color: #ffffff;" id="modal-title">Configure Injection Parameters</h3>
          <p style="margin: 0 0 16px 0; font-size: 12px; color: #94a3b8;" id="modal-desc">Provide parameter content lines to expand terminal syntax tokens smoothly.</p>
          <div id="modal-inputs-form" style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px;"></div>
          <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button id="modal-btn-cancel" style="background-color: #334155; color: #cbd5e1; border: none; font-size: 13px; font-weight: 600; padding: 8px 16px; border-radius: 8px; cursor: pointer;">Cancel</button>
            <button id="modal-btn-confirm" style="background-color: #2563eb; color: #ffffff; border: none; font-size: 13px; font-weight: 600; padding: 8px 16px; border-radius: 8px; cursor: pointer;">Confirm Injection ⚡</button>
          </div>
        </div>
      </div>
    `;
    Object.keys(commandDatabase).forEach(catName => {
      document.getElementById(`tab-${catName}`).addEventListener('click', () => {
        activeCategory = catName;
        renderViewState();
      });
    });

    commandDatabase[activeCategory].forEach((cmd, i) => {
      const card = document.getElementById(`cmd-card-${i}`);
      
      card.addEventListener('mouseenter', () => {
        document.getElementById('explanation-box').innerText = cmd.desc;
      });
      card.addEventListener('mouseleave', () => {
        document.getElementById('explanation-box').innerText = currentHoverText;
      });

      document.getElementById(`btn-exec-${i}`).addEventListener('click', async (e) => {
        e.stopPropagation();
        if (cmd.inputs && cmd.inputs.length > 0) {
          triggerInputParameterModal(cmd);
        } else {
          await executeShellSignal(cmd.text);
        }
      });
    });
  }

  function triggerInputParameterModal(cmdObject) {
    const modal = document.getElementById('modal-container');
    const formContainer = document.getElementById('modal-inputs-form');
    
    document.getElementById('modal-title').innerText = `Configure Parameter Bounds`;
    document.getElementById('modal-desc').innerText = cmdObject.desc;
    formContainer.innerHTML = "";
    
    cmdObject.inputs.forEach(inputToken => {
      formContainer.innerHTML += `
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <label style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #38bdf8; letter-spacing: 0.05em;">Enter [${inputToken.replace('_', ' ')}]:</label>
          <input 
            type="text" 
            id="input-token-${inputToken}" 
            placeholder="Enter metadata value..."
            style="background-color: #0f172a; border: 1px solid #334155; color: #f8fafc; border-radius: 8px; padding: 8px 12px; font-size: 13px; font-family: monospace; outline: none;"
          />
        </div>
      `;
    });

    modal.style.display = "flex";

    const confirmBtn = document.getElementById('modal-btn-confirm');
    const cancelBtn = document.getElementById('modal-btn-cancel');
    
    cancelBtn.onclick = () => { modal.style.display = "none"; };

    confirmBtn.onclick = async () => {
      let compiledCommand = cmdObject.text;
      let formIsValid = true;
      
      cmdObject.inputs.forEach(inputToken => {
        const value = document.getElementById(`input-token-${inputToken}`).value.trim();
        if (!value) {
          formIsValid = false;
          document.getElementById(`input-token-${inputToken}`).style.borderColor = "#ef4444";
        } else {
          compiledCommand = compiledCommand.replace(`{${inputToken}}`, value);
        }
      });

      if (!formIsValid) return;
      
      modal.style.display = "none";
      await executeShellSignal(compiledCommand);
    };
  }

  async function executeShellSignal(finalCommandString) {
    const consoleBox = document.querySelector('pre');
    consoleBox.innerText += `\n$ ${finalCommandString}\n[Processing OS shell signal payload...]`;
    consoleBox.scrollTop = consoleBox.scrollHeight;
    
    try {
      const response = await window.api.sendTerminalCommand(finalCommandString);
      terminalConsoleLog += `\n$ ${finalCommandString}\n${response.output}\n`;
    } catch (err) {
      terminalConsoleLog += `\n$ ${finalCommandString}\n❌ IPC Bridge Error: ${err.message}\n`;
    }
    renderViewState();
    const updatedConsole = document.querySelector('pre');
    updatedConsole.scrollTop = updatedConsole.scrollHeight;
  }

  renderViewState();
}

document.addEventListener('DOMContentLoaded', mountApplicationUI);
