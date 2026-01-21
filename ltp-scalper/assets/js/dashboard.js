let widget;

function loadChart(symbol) {
  if (widget) widget.remove();

  widget = new TradingView.widget({
    container_id: "tvchart",
    autosize: true,
    symbol: symbol,
    interval: "5",
    timezone: "Asia/Kolkata",
    theme: "dark",
    style: "1",
    locale: "en",
    toolbar_bg: "#121a24",
    hide_side_toolbar: false,
    enable_publishing: false,
    allow_symbol_change: true,
  });
}

// Initial load
loadChart("NSE:NIFTY");
