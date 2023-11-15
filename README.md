```js
order {
  order_item_name string,
  order_item_price float,
  order_item_description string,
  order_item_quantity integer,
  order_item_amount float,
  order_item_size,
  option_observation string,
  order_item_options [
    {
    option_name string,
    option_description string,
    option_has_quantity bool,
    option_max_number integer,
    option_is_required bool,
    option_list
      [
        {
          option_label string,
          option_price float,
          option_promo_original_price float
          option_quantity integer,
        }
      ]
    }
  ]
}
```

```json

establishment_info {
  "establishment_name": "Matsuri Concept",
  "establishment_logo_url": "https://raw.githubusercontent.com/marcosdissotti/images/main/matsuri_logo.png"
}

customer {
  "delivery_address": "Rua Mandaguari, 198"
}

order
{
  "order_item_price": 19.90,
  "order_item_name": "Ceviche de salmão",
  "order_item_quantity": 0,
  "order_item_amount": 0,
  "option_observation": "",
  "order_item_options": [
    {
      "option_name": "qual o tamanho?",
      "option_description": "escolha 1",
      "option_has_quantity": false,
      "option_max_number": 1,
      "option_is_required": true,
      "option_list": [
          {
            "option_label": "médio",
            "option_price": 19.90,
            "option_promo_original_price": 22.90,
            "option_quantity": 0
          },
          {
            "option_label": "grande",
            "option_price": 28.90,
            "option_promo_original_price": 0,
            "option_quantity": 0
          }
        ]
    },
    {
      "option_name": "vai querer bebida?",
      "option_description": "escolha quantos quiser",
      "option_has_quantity": true,
      "option_max_number": 0,
      "option_is_required": false,
      "option_list": [
          {
            "option_label": "coca-cola",
            "option_price": 10.00,
            "option_promo_original_price": 0,
            "option_quantity": 2
          },
          {
            "option_label": "suco prats laranja",
            "option_price": 6.00,
            "option_promo_original_price": 0,
            "option_quantity": 0
          },
          {
            "option_label": "água sem gás",
            "option_price": 3.00,
            "option_promo_original_price": 0,
            "option_quantity": 0
          }
        ]
    },
    {
      "option_name": "precisa de talher?",
      "option_description": "escolha até 1",
      "option_has_quantity": false,
      "option_max_number": 1,
      "option_is_required": false,
      "option_list": [
          {
            "option_label": "hashi",
            "option_price": 0.00,
            "option_promo_original_price": 0,
            "option_quantity": 0
          },
          {
            "option_label": "garfo e faca descartável",
            "option_price": 1.00,
            "option_promo_original_price": 0,
            "option_quantity": 0
          }
        ]
    },
    {
      "option_name": "mais alguma coisa?",
      "option_description": "escolha até 2",
      "option_has_quantity": false,
      "option_max_number": 2,
      "option_is_required": false,
      "option_list": [
          {
            "option_label": "biscoito da sorte",
            "option_price": 2.00,
            "option_promo_original_price": 0,
            "option_quantity": 0
          },
          {
            "option_label": "rolinho primavera",
            "option_price": 8.00,
            "option_promo_original_price": 0,
            "option_quantity": 0
          }
        ]
    },
  ]
}
```
