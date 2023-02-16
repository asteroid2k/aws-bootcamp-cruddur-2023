# Week 0 — Billing and Architecture

## Required

- Recreated architectural diagram in [Lucidchart](https://lucid.app/lucidchart/b3b6b4af-a646-4bd8-9e20-65f8fa03b17d/edit?viewport_loc=-301%2C-105%2C2285%2C1650%2C0_0&invitationId=inv_12cca015-f027-4af6-8ff7-2acf6ebbe967)

![architectural diagram](assets/architectural_diagram.png)

- Created Monthly Cost Budget  
   2 notifications when costs exceeds 90% of $5 and when forcasted cost is $5.  
  [budget file](../aws/json/budget.json)  
   [budget notification file](../aws/json/budget-notifications-with-subscribers.json)

  ```
  aws budgets create-budget  \
    --account-id $AWS_ACCOUNT_ID  \
    --budget file://aws/json/budget.json  \
    --notifications-with-subscribers file://aws/json/budget-notifications-with-subscribers.json
  ```

  ![monthly budget](assets/monthly_budget.png)

- Created Daily Limit Alarm  
   Alarm for $1 daily limit  
  [alarm file](../aws/json/alarm-config.json)

  ![billing alarm](assets/billing_alarm.png)
