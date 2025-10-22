---
title: "Support Subscriptions"
description: "Choose the support level that fits your needs"
layout: "pricing"
---

<div class="py-10">
<h2 class="text-3xl text-center">Various Levels of Engagement to Empower Your HPC Service</h2>
<p class="text-xl text-center mt-4">At ConcertIM we are ready to meet your specific needs to deliver your HPC service. We deliver our support to you via a subscription model so you are free to cancel anytime and change your level of support as suits you.</p>
<p class="text-xl text-center mt-4"><i>Select a subscription type below to find out more about the levels of subscription offered within it.</i></p>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div class="w-full text-center" onclick="showSupport(event, 'passive')"><p class="w-full cursor-pointer tablink text-center btn-primary text-2xl">Passive</p></div>
  <div class="w-full text-center" onclick="showSupport(event, 'active')"><p class="w-full cursor-pointer tablink text-center btn-outline text-2xl">Active</p></div>
</div>

<script>
function showSupport(evt, supportType) {
  var i;
  var x = document.getElementsByClassName("support-type");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" btn-primary", " btn-outline");
  }
  document.getElementById(supportType).style.display = "block";
  evt.currentTarget.firstElementChild.className = evt.currentTarget.firstElementChild.className.replace(" btn-outline", " btn-primary");
}
</script>

<div id="passive" class="support-type">
{{< pricing-table-1 >}}
{
    "title": "Passive HPC Service Subscription",
    "description": "Our <b>passive subscriptions</b> put you in the driving seat. You have <b>control over your service</b> and it's evolution while we keep an eye on things and can step in to help whenever you want us to.<br /><br /><i>Select a feature from the list below to learn more</i>",
    "plans": [
        {
            "name": "Operations",
            "price": "£",
            "description": "Peace of mind about your resources",
            "features": [
            {
                "feature": "Hardware Issue Notifications", 
                "info": "Our systems monitor your hardware and notify you of faults at the earliest possible point."
            },
            {
                "feature": "Support with Hardware Repair", 
                "info": "Our team is ready to assist with the hardware repair process at your behest. Simply handover the affected components and we'll liaise with hardware vendors and data centre contacts to get the repair underway."
            },
            {
                "feature": "Root Access", 
                "info": "The power is in your hands, with root access across your HPC service you can make the changes you need."
            },
            {
                "feature": "Full Environment Control", 
                "info": "Your environment is yours to modify, evolve and control how you would like to build the exact service you need."
            },
            {
                "feature": "Certified Hardware States", 
                "info": "Our team verifies functional hardware configurations to ensure base system stability."
            }
            ],
            "altname": "Active Subscription",
            "altfeatures": [
                "Proactive Hardware Repair",
                "Service Health Reporting"
            ]
        },
        {
            "name": "Engineering",
            "price": "££",
            "description": "Collaborate on your HPC service",
            "features": [
            {
                "feature": "Certified Hardware States", 
                "info": "Our team verifies functional hardware configurations to ensure base system stability."
            },
            {
                "feature": "Environment Modification Training", 
                "info": "Training on best practices and change control methodology to stay on top of your evolving service."
            },
            {
                "feature": "Example Deployments", 
                "info": "Access to demonstration environments for reference when implementing your system changes."
            }
            ],
            "altname": "Active Subscription",
            "altfeatures": [
                "Workflow Analysis",
                "Advanced Proactive Diagnostics"
            ]
        },
        {
            "name": "Specialist",
            "price": "£££",
            "description": "Hands-on assistance with architecting your service",
            "features": [
                {
                    "feature": "Environment Diagnostics", 
                    "info": "Assistance with understanding and troubleshooting your HPC environment."
                },
                {
                    "feature": "Hourly-rate Specialist Assistance", 
                    "info": "Open contact with our specialists to help with environment modifications."
                }
            ],
            "altname": "Active Subscription",
            "altfeatures": [
                "Cost-Scoped Specialist Assistance"
            ]
        }
    ]
}
{{< /pricing-table-1 >}}

{{< faq >}}
{
    "title": "Passive Support FAQs",
    "description": "Find answers to frequently asked questions about our passive support subscriptions.",
    "questions": [
        {
            "question": "How does a Passive Operations Subscription work?",
            "answer": "With a Passive Operations Subscription you get our least-intrusive service solution. We will monitor your hardware for signs of degradation as well as provide assistance with diagnosing suspected hardware issues affecting your HPC service. We don't get access to your HPC environment OS unless you activate the diagnostic process."
        },
        {
            "question": "How does a Passive Engineering Subscription work?",
            "answer": "With a Passive Engineering Subscription you collaborate with us to deliver your HPC service. A base HPC environment is provided and we will train you fully in performing change management to the compute system. We have limited access to your HPC environment and use this for delivering essential services, monitoring for environment degradation and assisting with diagnosing suspected issues with your service that could be caused by base environment modifications/configuration. With example deployments we provide interactive references for experimenting with service changes."
        },
        {
            "question": "How does a Passive Specialist Subscription work?",
            "answer": "With a Passive Specialist Subscription you get access to bespoke support options, reducing the technical burden of evolving the service. We will require access to your HPC environment when you engage with us for support which is charged at an hourly rate."
        }
    ]
}
{{< /faq >}}

</div>

<div id="active" class="support-type" style="display: none">
{{< pricing-table-1 >}}
{
    "title": "Active HPC Service Subscription",
    "description": "Our <b>active subscriptions</b> streamline you service delivery. By engaging with a ConcertIM-designed solution you have <b>peace-of-mind</b> knowing that our tried-and-tested methodologies and architecture will <b>stand the test of time</b>.<br /><br /><i>Select a feature from the list below to learn more</i>",
    "plans": [
        {
            "name": "Operations",
            "price": "£",
            "description": "Base-level service gurantee",
            "features": [
            {
                "feature": "Proactive Hardware Repair",
                "info": "Our team and systems monitor your hardware to identify faults at the earliest possible point and immediately begin liaising with hardware vendor, data centre contacts and the customer to being repair. This reduces the downtime and service impact of hardware failures." 
            },
            {
                "feature": "Hardware Diagnostics", 
                "info": "Our team has a suite of processes and tools to monitor, diagnose and benchmark your hardware to ensure that it is functioning as expected. If in doubt then the diagnostic process can be relaunched to validate system performance."
            },
            {
                "feature": "Base Environment Delivery", 
                "info": "Through our standardised HPC stack we are able to guarantee the base interconnectivity and functionality of your HPC service."
            },
            {
                "feature": "Service Health Reporting", 
                "info": "Our team regularly checks and provides insights into service health and areas that may need attention."
            }
            ],
            "altname": "Passive Subscription",
            "altfeatures": [
                "Root Access",
                "Hardware & Environment Control"
            ]
        },
        {
            "name": "Engineering",
            "price": "££",
            "description": "Full-stack service functionality",
            "features": [
            {
                "feature": "Proactive Hardware Repair",
                "info": "Our team and systems monitor your hardware to identify faults at the earliest possible point and immediately begin liaising with hardware vendor, data centre contacts and the customer to being repair. This reduces the downtime and service impact of hardware failures." 
            },
            {
                "feature": "Hardware Diagnostics", 
                "info": "Our team has a suite of processes and tools to monitor, diagnose and benchmark your hardware to ensure that it is functioning as expected. If in doubt then the diagnostic process can be relaunched to validate system performance."
            },
            {
                "feature": "Service Health Reporting", 
                "info": "Our team regularly checks and provides insights into service health and areas that may need attention."
            },
            {
                "feature": "Workflow Analysis", 
                "info": "Understand user workloads through insights and use them to reduce costs, improve efficiency and evolve workflows."
            },
            {
                "feature": "Advanced Proactive Diagnostics & Recommendations", 
                "info": "Through our standardised HPC stack we can ensure HPC service integrity and continue to provide recommendations to help grow the service to meet evolving needs."
            }
            ],
            "altname": "Passive Subscription",
            "altfeatures": [
                "Root Access",
                "Hardware & Environment Control",
                "Environment Modification Training",
                "Environment Diagnostics"
            ]
        },
        {
            "name": "Specialist",
            "price": "£££",
            "description": "Bespoke service solutions",
            "features": [
            {
                "feature": "Proactive Hardware Repair",
                "info": "Our team and systems monitor your hardware to identify faults at the earliest possible point and immediately begin liaising with hardware vendor, data centre contacts and the customer to being repair. This reduces the downtime and service impact of hardware failures." 
            },
            {
                "feature": "Hardware Diagnostics", 
                "info": "Our team has a suite of processes and tools to monitor, diagnose and benchmark your hardware to ensure that it is functioning as expected. If in doubt then the diagnostic process can be relaunched to validate system performance."
            },
            {
                "feature": "Service Health Reporting", 
                "info": "Our team regularly checks and provides insights into service health and areas that may need attention."
            },
            {
                "feature": "Workflow Analysis", 
                "info": "Understand user workloads through insights and use them to reduce costs, improve efficiency and evolve workflows."
            },
            {
                "feature": "Advanced Proactive Diagnostics & Recommendations", 
                "info": "Through our standardised HPC stack we can ensure HPC service integrity and continue to provide recommendations to help grow the service to meet evolving needs."
            },
            {
                "feature": "Cost-Scoped Specialist Environment Assistance", 
                "info": "Ability to evolve the service further through clearly defined packets of work detailing costs, timescales and implementation details."
            }
            ],
            "altname": "Passive Subscription",
            "altfeatures": [
                "Root Access",
                "Hardware & Environment Control",
                "Hourly-rate Specialist Assistance"
            ]
        }
    ]
}
{{< /pricing-table-1 >}}

{{< faq >}}
{
    "title": "Active Subscription FAQs",
    "description": "Find answers to frequently asked questions about our active support subscriptions.",
    "questions": [
        {
            "question": "How does an Active Operations Subscription work?",
            "answer": "With an Active Operations Subscription we monitor your hardware and environment for signs of degradation and automatically respond to alerts to ensure minimal downtime and service disruption. Each month we'll deliver reports detailing our hardware & service diagnostics. We guarantee a base-level of functionality for both your hardware and your service."
        },
        {
            "question": "How does an Active Engineering Subscription work?",
            "answer": "With an Active Engineering Subscription you get everything in Active Operations and we'll also provide assistance with workflow analysis and environment delivery. Helping to build the environment that your users need with standardised solutions to complex problems."
        },
        {
            "question": "How does an Active Specialist Subscription work?",
            "answer": "With an Active Specialist Subscription you get everything in Active Engineering and access to bespoke support options, reducing the technical burden of evolving the service. All bespoke solutions are delivered through scoped statements of work giving a guaranteed cost for making changes to your service."
        }
    ]
}
{{< /faq >}}
</div>

