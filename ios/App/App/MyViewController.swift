import UIKit
import Capacitor

class MyViewController: CAPBridgeViewController {
    override func webViewConfiguration(for instanceConfiguration: InstanceConfiguration) -> WKWebViewConfiguration {
        let webViewConfig = WKWebViewConfiguration()

        webViewConfig.allowsInlineMediaPlayback = true
        webViewConfig.mediaTypesRequiringUserActionForPlayback = []

        return webViewConfig
    }
}
